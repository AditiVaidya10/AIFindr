const { Configuration, OpenAIApi } = require('openai');
const mockProfiles = require('../data/profiles.json');

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

const storedEmbeddings = [];

async function getEmbedding(text) {
  const res = await openai.createEmbedding({
    model: 'text-embedding-ada-002',
    input: text
  });
  return res.data.data[0].embedding;
}

function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

async function embedAndSearch(query) {
  const queryEmbedding = await getEmbedding(query);
  if (storedEmbeddings.length === 0) {
    for (const profile of mockProfiles) {
      const embedding = await getEmbedding(profile.bio);
      storedEmbeddings.push({ profile, embedding });
    }
  }

  const results = storedEmbeddings.map(({ profile, embedding }) => {
    const similarity = cosineSimilarity(queryEmbedding, embedding);
    return { profile, similarity };
  });

  return results.sort((a, b) => b.similarity - a.similarity).slice(0, 5);
}

module.exports = { embedAndSearch };