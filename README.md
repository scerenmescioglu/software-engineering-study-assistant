# Software Engineering Study Assistant

A private, offline Retrieval-Augmented Generation application that answers Software Engineering questions using a local document knowledge base.

The application retrieves relevant sections from indexed study documents, supplies them to a locally running language model, and displays grounded answers with their sources. Questions unsupported by the knowledge base are rejected rather than answered using general model knowledge.

## Features

- Fully local AI inference with Foundry Local
- Phi-3.5 Mini language model
- Software Engineering knowledge base
- TF-IDF retrieval and cosine-similarity ranking
- SQLite document storage
- Source attribution
- Unsupported-question protection
- Runtime Markdown and text document uploads
- Streaming answers
- Normal and compact response modes
- Recent conversations stored in the browser
- Collapsible study-topic navigation
- Dark, light, and rose themes
- Responsive desktop and mobile interface
- Automated tests

## Knowledge-Base Topics

The included documents cover:

1. Software Testing
2. Requirements Engineering
3. Database Design and Normalization
4. Software Development Life Cycle and Agile
5. Software Architecture and UML
6. Git and Version Control
7. Object-Oriented Programming
8. Software Security
9. Algorithms and Data Structures
10. Software Project Management

## Technologies

- Node.js
- Express.js
- Foundry Local SDK
- Phi-3.5 Mini
- SQLite
- better-sqlite3
- TF-IDF
- Cosine similarity
- HTML
- CSS
- JavaScript

## Requirements

- Node.js 20 or newer
- npm
- Git
- A supported Foundry Local environment
- Approximately 2 GB of available storage for the initial model download

Check your versions:

```bash
node --version
npm --version
git --version
```

## Installation

Install project dependencies:

```bash
npm install
```

## Build the Knowledge Base

The SQLite database is generated locally and is not stored in Git.

Create it from the files inside `docs/`:

```bash
npm run ingest
```

The ingestion process:

1. Reads the Markdown documents
2. Parses document metadata
3. Divides each document into overlapping chunks
4. Generates term-frequency vectors
5. Saves the chunks and vectors in SQLite

## Start the Application

```bash
npm start
```

Open:

```text
http://127.0.0.1:3000
```

On the first run, Foundry Local may download the local language model. The application becomes ready when the terminal reports that the model and vector store have loaded.

## Run Automated Tests

```bash
npm test
```

Current result:

```text
51 tests passed
0 tests failed
```

The tests cover:

- Front-matter parsing
- Document chunking
- Stop-word filtering
- Term-frequency generation
- Cosine similarity
- Application configuration
- System prompts
- Health endpoint
- Document-list endpoint
- Chat endpoint
- Document uploads
- SQLite vector-store operations

## Example Questions

```text
What is the difference between verification and validation?
```

```text
What is the difference between partial dependency and transitive dependency?
```

```text
Compare Agile development with the Waterfall model.
```

```text
What is SQL injection and how can it be prevented?
```

```text
Compare breadth-first search and depth-first search.
```

When the requested information is unsupported, the assistant returns:

```text
This information is not available in the local knowledge base.
```

## Runtime Document Upload

The Knowledge Base panel accepts:

- `.md`
- `.txt`

Uploaded documents are chunked, indexed, and made searchable without restarting the application.

The maximum supported upload size is 2 MB.

Example document:

```markdown
---
title: DevOps Fundamentals
category: DevOps
id: SE-DEVOPS-001
---

# DevOps Fundamentals

DevOps combines development and operations practices to improve collaboration, automation, and software delivery.
```

## Project Structure

```text
software-engineering-study-assistant/
├── docs/                 Knowledge-base documents
├── public/
│   └── index.html        Responsive user interface
├── src/
│   ├── chatEngine.js     Retrieval and model integration
│   ├── chunker.js        Parsing, chunking, and token processing
│   ├── config.js         Application configuration
│   ├── ingest.js         Document-ingestion process
│   ├── prompts.js        Study-assistant prompts
│   ├── server.js         Express server and API endpoints
│   └── vectorStore.js    SQLite retrieval system
├── test/                 Automated tests
├── screenshots/          Assignment screenshots
├── package.json
├── package-lock.json
└── README.md
```

## RAG Workflow

```text
Study documents
      ↓
Document parsing
      ↓
Overlapping chunks
      ↓
TF-IDF vectors
      ↓
SQLite vector store
      ↓
User question
      ↓
Stop-word filtering
      ↓
Cosine-similarity retrieval
      ↓
Relevant document chunks
      ↓
Prompt construction
      ↓
Local language model
      ↓
Answer with sources
```

## Privacy

The language model runs locally through Foundry Local.

The documents, vector database, and generated answers remain on the computer. Recent conversations are stored in the browser using `localStorage`.

## Changes Made to the Starter Project

- Replaced the gas-field documents with Software Engineering material
- Renamed the complete project
- Updated the Foundry Local SDK
- Updated streaming for the current SDK
- Redesigned the entire user interface
- Added desktop and mobile-responsive layouts
- Added dark, light, and rose themes
- Added compact response mode
- Added recent-conversation storage
- Added collapsible study topics
- Added stop-word filtering
- Added unsupported-question protection
- Added source cards
- Updated all automated tests for the new domain

## Limitations

- TF-IDF mainly relies on keyword overlap.
- Semantically similar questions may be missed when they use very different vocabulary.
- Answer quality depends on the indexed documents.
- Recent conversations are specific to the browser and device.
- Only Markdown and plain-text uploads are currently supported.
- Local inference may be slower on computers with limited processing power.
- This project is intended for learning and demonstration.

## Future Improvements

- Local embedding-based retrieval
- Hybrid keyword and semantic retrieval
- PDF ingestion
- Conversation search
- Delete and edit document controls
- Conversation export
- Quiz-generation mode
- Flashcards
- Persistent conversation storage in SQLite
- Progressive Web App support

## Author

**Suheyla Ceren Mescioglu**

Software Engineering Study Assistant  

