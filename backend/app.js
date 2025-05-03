const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { embedAndSearch } = require('./services/aiSearch');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/search', async (req, res) => {
  const { query } = req.body;
  try {
    const results = await embedAndSearch(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));