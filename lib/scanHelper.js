import natural from "natural";
import stopWordsArray from "./stopWords";

const stopWords = new Set(stopWordsArray); // ✅ Convert to Set

const preprocessText = (text) => {
  const lowercaseText = text.toLowerCase();
  const alphanumericText = lowercaseText
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ");

  const tokenizer = new natural.WordTokenizer();
  const filteredTokens = tokenizer
    .tokenize(alphanumericText)
    .filter((token) => !stopWords.has(token));

  return filteredTokens.join(" ");
};

const calculateCosineSimilarity = (vector1, vector2) => {
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (let i = 0; i < vector1.length; i++) {
    const val1 = vector1[i];
    const val2 = vector2[i];
    dotProduct += val1 * val2;
    norm1 += val1 ** 2;
    norm2 += val2 ** 2;
  }

  const similarity = dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
  return similarity;
};

export const scanHelper = (resume, jobDescription) => {
  const tokenizer = new natural.WordTokenizer();
  const resumeTokens = tokenizer.tokenize(preprocessText(resume));
  const jobDescriptionTokens = tokenizer.tokenize(
    preprocessText(jobDescription)
  );

  if (resumeTokens.length === 0 || jobDescriptionTokens.length === 0) {
    return "0.00";
  }

  const tfidf = new natural.TfIdf();
  tfidf.addDocument(resumeTokens.join(" "));
  tfidf.addDocument(jobDescriptionTokens.join(" "));

  const resumeVector = tfidf.tfidfs(resumeTokens.join(" "));
  const jobDescVector = tfidf.tfidfs(jobDescriptionTokens.join(" "));

  const cosineSimilarity = calculateCosineSimilarity(
    jobDescVector,
    resumeVector
  );
  return (cosineSimilarity * 100).toFixed(2);
};
