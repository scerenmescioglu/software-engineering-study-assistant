/**
 * Document chunking and retrieval utilities.
 */

const STOP_WORDS = new Set([
  "a", "an", "and", "are", "as", "at",
  "be", "been", "but", "by",
  "can", "could",
  "did", "do", "does",
  "for", "from",
  "had", "has", "have", "how",
  "i", "if", "in", "into", "is", "it", "its",
  "may", "might",
  "of", "on", "or", "our",
  "should",
  "that", "the", "their", "them", "then", "there",
  "these", "they", "this", "to",
  "was", "we", "were", "what", "when", "where",
  "which", "who", "why", "will", "with", "would",
  "you", "your",
]);

/**
 * Parse YAML-like front matter from a Markdown document.
 */
export function parseFrontMatter(text) {
  const match = text.match(
    /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/,
  );

  if (!match) {
    return {
      meta: {},
      body: text,
    };
  }

  const meta = {};

  for (const line of match[1].split("\n")) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex > 0) {
      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim();

      meta[key] = value;
    }
  }

  return {
    meta,
    body: match[2],
  };
}

/**
 * Split text into overlapping chunks.
 */
export function chunkText(
  text,
  maxTokens = 400,
  overlapTokens = 50,
) {
  const words = text.split(/\s+/).filter(Boolean);

  if (words.length <= maxTokens) {
    return [text];
  }

  const chunks = [];
  let start = 0;

  while (start < words.length) {
    const end = Math.min(start + maxTokens, words.length);

    chunks.push(
      words.slice(start, end).join(" "),
    );

    if (end >= words.length) {
      break;
    }

    start = end - overlapTokens;
  }

  return chunks;
}

/**
 * Build a term-frequency vector.
 *
 * Common English stop words are removed so unrelated questions
 * do not retrieve documents merely because they contain words
 * such as "the", "is", or "what".
 */
export function termFrequency(text) {
  const tf = new Map();

  const tokens = text
    .toLowerCase()
    .replace(/[^a-z0-9₂\-']/g, " ")
    .split(/\s+/)
    .filter(
      (token) =>
        token.length > 1 &&
        !STOP_WORDS.has(token),
    );

  for (const token of tokens) {
    tf.set(token, (tf.get(token) || 0) + 1);
  }

  return tf;
}

/**
 * Calculate cosine similarity between two term-frequency vectors.
 */
export function cosineSimilarity(a, b) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (const [term, frequency] of a) {
    normA += frequency * frequency;

    if (b.has(term)) {
      dotProduct += frequency * b.get(term);
    }
  }

  for (const [, frequency] of b) {
    normB += frequency * frequency;
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return (
    dotProduct /
    (Math.sqrt(normA) * Math.sqrt(normB))
  );
}
