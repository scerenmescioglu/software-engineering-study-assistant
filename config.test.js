import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { config } from "../src/config.js";
import { SYSTEM_PROMPT, SYSTEM_PROMPT_COMPACT } from "../src/prompts.js";

describe("config", () => {
  it("has required model setting", () => {
    assert.ok(config.model, "model must be defined");
    assert.equal(typeof config.model, "string");
  });

  it("has valid RAG settings", () => {
    assert.ok(config.chunkSize > 0, "chunkSize must be positive");
    assert.ok(config.chunkOverlap >= 0, "chunkOverlap must be non-negative");
    assert.ok(config.chunkOverlap < config.chunkSize, "overlap must be less than chunk size");
    assert.ok(config.topK > 0, "topK must be positive");
  });

  it("has valid server settings", () => {
    assert.ok(config.port > 0 && config.port < 65536, "port must be valid");
    assert.equal(config.host, "127.0.0.1", "host should be localhost");
  });

  it("has docsDir and dbPath as absolute paths", () => {
    assert.ok(config.docsDir.includes("docs"), "docsDir should include 'docs'");
    assert.ok(config.dbPath.includes("rag.db"), "dbPath should include 'rag.db'");
  });

  it("has publicDir defined", () => {
    assert.ok(config.publicDir, "publicDir must be defined");
    assert.ok(config.publicDir.includes("public"), "publicDir should include 'public'");
  });
});

describe("SYSTEM_PROMPT", () => {
  it("is a non-empty string", () => {
    assert.equal(typeof SYSTEM_PROMPT, "string");
    assert.ok(SYSTEM_PROMPT.length > 100, "full prompt should be substantial");
  });

  it("restricts answers to retrieved context", () => {
    const prompt = SYSTEM_PROMPT.toLowerCase();

    assert.ok(
      prompt.includes("provided document context"),
      "prompt must restrict answers to retrieved document context",
    );

    assert.ok(
      prompt.includes("do not use outside knowledge"),
      "prompt must prevent outside-knowledge answers",
    );
  });

  it("mentions offline/local operation", () => {
    const lower = SYSTEM_PROMPT.toLowerCase();
    assert.ok(lower.includes("offline") || lower.includes("on-device") || lower.includes("local"),
      "prompt must mention offline operation");
  });

  it("instructs not to hallucinate", () => {
    const lower = SYSTEM_PROMPT.toLowerCase();
    assert.ok(lower.includes("hallucinate") || lower.includes("not available in the local"),
      "prompt must discourage hallucination");
  });

  it("instructs concise response formatting", () => {
    const prompt = SYSTEM_PROMPT.toLowerCase();

    assert.ok(
      prompt.includes("2 short paragraphs") ||
        prompt.includes("5 bullet points"),
      "prompt should specify a concise response length",
    );
  });
});

describe("SYSTEM_PROMPT_COMPACT", () => {
  it("is a non-empty string", () => {
    assert.equal(typeof SYSTEM_PROMPT_COMPACT, "string");
    assert.ok(SYSTEM_PROMPT_COMPACT.length > 20);
  });

  it("is shorter than the full prompt", () => {
    assert.ok(SYSTEM_PROMPT_COMPACT.length < SYSTEM_PROMPT.length,
      "compact prompt should be shorter");
  });

  it("keeps compact answers concise and grounded", () => {
    const prompt = SYSTEM_PROMPT_COMPACT.toLowerCase();

    assert.ok(
      prompt.includes("1 short paragraph") ||
        prompt.includes("3 bullet points"),
      "compact prompt should request short answers",
    );

    assert.ok(
      prompt.includes("local knowledge base"),
      "compact prompt should remain grounded in the knowledge base",
    );
  });
});
