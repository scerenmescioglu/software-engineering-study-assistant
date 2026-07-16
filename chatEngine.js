/**
 * Foundry Local chat engine.
 * Uses the Foundry Local SDK to discover, load, and run inference
 * on a local model. Performs RAG retrieval and generates responses.
 * Selects the hardware-optimised model variant automatically and
 * reports download/load progress via a status callback.
 */

import { FoundryLocalManager } from "foundry-local-sdk";
import { VectorStore } from "./vectorStore.js";
import { config } from "./config.js";
import { SYSTEM_PROMPT, SYSTEM_PROMPT_COMPACT } from "./prompts.js";

const NO_CONTEXT_RESPONSE =
  "This information is not available in the local knowledge base.";

export class ChatEngine {
  constructor() {
    this.chatClient = null;
    this.model = null;
    this.store = null;
    this.compactMode = false;
    this.modelAlias = null;

    /** @type {(status: {phase: string, message: string, progress?: number}) => void} */
    this._statusCallback = null;
  }

  /** Register a callback that receives initialization status updates. */
  onStatus(callback) {
    this._statusCallback = callback;
  }

  _emitStatus(phase, message, progress) {
    const status = {
      phase,
      message,
      ...(progress !== undefined && { progress }),
    };

    console.log(`[ChatEngine] ${message}`);

    if (this._statusCallback) {
      this._statusCallback(status);
    }
  }

  /**
   * Initialize Foundry Local, load the model,
   * and open the vector database.
   */
  async init() {
    this._emitStatus("init", "Initializing Foundry Local SDK...");

    const manager = FoundryLocalManager.create({
      appName: "software-engineering-study-assistant",
    });

    const catalog = manager.catalog;

    this._emitStatus("catalog", "Discovering available models...");

    this.model = await catalog.getModel(config.model);
    this.modelAlias = this.model.alias;

    this._emitStatus(
      "variant",
      `Selected model: ${this.modelAlias}`,
    );

    if (!this.model.isCached) {
      this._emitStatus(
        "download",
        `Downloading ${this.modelAlias}... This may take a few minutes on first run.`,
        0,
      );

      await this.model.download((progress) => {
        const percentage = Math.round(progress * 100);

        this._emitStatus(
          "download",
          `Downloading ${this.modelAlias}... ${percentage}%`,
          progress,
        );
      });

      this._emitStatus(
        "download",
        "Download complete.",
        1,
      );
    } else {
      this._emitStatus(
        "cached",
        `Model ${this.modelAlias} is already cached.`,
      );
    }

    this._emitStatus(
      "loading",
      `Loading ${this.modelAlias} into memory...`,
    );

    await this.model.load();

    this.chatClient = this.model.createChatClient();
    this.chatClient.settings.temperature = 0.1;

    this._emitStatus(
      "ready",
      `Model ready: ${this.modelAlias}`,
    );

    this.store = new VectorStore(config.dbPath);

    const count = this.store.count();

    this._emitStatus(
      "ready",
      `Vector store ready: ${count} chunks indexed.`,
    );

    if (count === 0) {
      console.warn(
        "[ChatEngine] WARNING: No documents ingested. Run 'npm run ingest' first.",
      );
    }
  }

  /** Return the vector store for document-upload operations. */
  getStore() {
    return this.store;
  }

  /** Enable or disable compact mode. */
  setCompactMode(enabled) {
    this.compactMode = enabled;

    console.log(
      `[ChatEngine] Compact mode: ${enabled ? "ON" : "OFF"}`,
    );
  }

  /** Retrieve relevant chunks from the local knowledge base. */
  retrieve(query) {
    const topK = this.compactMode
      ? Math.min(config.topK, 3)
      : config.topK;

    return this.store.search(query, topK);
  }

  /** Turn retrieved chunks into prompt context. */
  _buildContext(chunks) {
    if (chunks.length === 0) {
      return "No relevant documents found in local knowledge base.";
    }

    return chunks
      .map(
        (chunk, index) =>
          `--- Document ${index + 1}: ${chunk.title} [${chunk.category}] ---\n${chunk.content}`,
      )
      .join("\n\n");
  }

  /** Generate a non-streaming answer. */
  async query(userMessage, history = []) {
    const chunks = this.retrieve(userMessage);

    // Do not call the model when retrieval found no evidence.
    if (chunks.length === 0) {
      return {
        text: NO_CONTEXT_RESPONSE,
        sources: [],
      };
    }

    const context = this._buildContext(chunks);

    const systemPrompt = this.compactMode
      ? SYSTEM_PROMPT_COMPACT
      : SYSTEM_PROMPT;

    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "system",
        content:
          `Retrieved context from local knowledge base:\n\n${context}`,
      },
      ...history,
      {
        role: "user",
        content: userMessage,
      },
    ];

    this.chatClient.settings.maxTokens =
      this.compactMode ? 180 : 350;

    const response =
      await this.chatClient.completeChat(messages);

    return {
      text:
        response.choices?.[0]?.message?.content ?? "",
      sources: chunks.map((chunk) => ({
        title: chunk.title,
        category: chunk.category,
        docId: chunk.doc_id,
        score:
          Math.round(chunk.score * 100) / 100,
      })),
    };
  }

  /**
   * Generate a streaming answer.
   * Sources are yielded first, followed by answer text.
   */
  async *queryStream(userMessage, history = []) {
    const chunks = this.retrieve(userMessage);

    // Return a deterministic refusal instead of asking the model
    // to answer without supporting documents.
    if (chunks.length === 0) {
      yield {
        type: "sources",
        data: [],
      };

      yield {
        type: "text",
        data: NO_CONTEXT_RESPONSE,
      };

      return;
    }

    const context = this._buildContext(chunks);

    const systemPrompt = this.compactMode
      ? SYSTEM_PROMPT_COMPACT
      : SYSTEM_PROMPT;

    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "system",
        content:
          `Retrieved context from local knowledge base:\n\n${context}`,
      },
      ...history,
      {
        role: "user",
        content: userMessage,
      },
    ];

    this.chatClient.settings.maxTokens =
      this.compactMode ? 180 : 350;

    // Send source information to the browser first.
    yield {
      type: "sources",
      data: chunks.map((chunk) => ({
        title: chunk.title,
        category: chunk.category,
        docId: chunk.doc_id,
        score:
          Math.round(chunk.score * 100) / 100,
      })),
    };

    // SDK 1.x returns an asynchronous stream of response chunks.
    for await (
      const chunk of
        this.chatClient.completeStreamingChat(messages)
    ) {
      const content =
        chunk.choices?.[0]?.delta?.content;

      if (content) {
        yield {
          type: "text",
          data: content,
        };
      }
    }
  }

  /** Release the model and database resources. */
  close() {
    if (this.model) {
      this.model.unload().catch(() => {});
    }

    if (this.store) {
      this.store.close();
    }
  }
}
