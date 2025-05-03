import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch('http://localhost:5000/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="App">
      <h1>AIFindr</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Describe your ideal person..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((r, i) => (
          <div key={i} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <strong>{r.profile.name}</strong>
            <p>{r.profile.bio}</p>
            <small>Similarity: {r.similarity.toFixed(2)}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;