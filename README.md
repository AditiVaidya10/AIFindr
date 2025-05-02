# AIFindr — AI-Powered People Discovery Engine

![AIFindr Banner](https://dummyimage.com/1000x200/000/fff&text=AIFindr+AI+People+Matcher)

## 🚀 Project Overview
AIFindr helps users discover people who match their vibe using **natural language AI search**. Just type your ideal person description, and our engine surfaces the most aligned profiles using LLM-based embeddings and semantic similarity search.

> Example: *"Find me a startup founder who loves dogs and writes like Hemingway"* → results ranked by vibe match + explanation.

---

## 🛠 Tech Stack
| Layer | Tech Used |
|-------|-----------|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| AI / Embedding | OpenAI `text-embedding-ada-002` |
| Vector Search | FAISS (Local via `faiss-node`) |
| Database | In-memory mock (JSON) — can plug into PostgreSQL later |
| Hosting | Render (backend) + Vercel (frontend) |

---

## 🗂️ Project Structure
```
AIFindr/
├── backend/
│   ├── app.js
│   ├── services/
│   │   └── aiSearch.js
│   ├── data/
│   │   └── profiles.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── index.js
│   └── public/
│       └── index.html
├── .gitignore
├── README.md
└── deployment/
    └── render-deploy.yaml (optional)
```

---

## 🔥 Key Features
- ✨ Natural-language input → vectorized search
- 🧠 Embedding + vector similarity matching
- 📋 Real-time ranked results with explanation
- 💬 Mock data that can be swapped with live profiles

---

## 🎬 Screenshots
> **Main Search UI**
![Search UI](https://dummyimage.com/600x300/282c34/ffffff&text=Search+UI)

> **Results Display**
![Results UI](https://dummyimage.com/600x300/282c34/ffffff&text=Matching+Profiles)

---

## ✅ How to Run Locally

### 🧠 Prerequisite: Get OpenAI API Key
Sign up at https://platform.openai.com/ and get your `OPENAI_API_KEY`.

### 📦 Backend
```bash
cd backend
npm install
# Create .env and add:
# OPENAI_API_KEY=sk-xxxx
node app.js
```

### 💻 Frontend
```bash
cd frontend
npm install
npm start
```

> Frontend runs at: `http://localhost:3000`
> Backend runs at: `http://localhost:5000`

---

## ☁️ Deployment Guide

### Backend on Render
1. Go to [https://render.com](https://render.com)
2. Click **New Web Service**
3. Connect GitHub → Select `backend` folder
4. Add environment variable `OPENAI_API_KEY`
5. Set build command: `npm install`
6. Set start command: `node app.js`

### Frontend on Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Connect GitHub → Select `frontend` folder
3. Framework = React
4. Set environment variable if needed (like `REACT_APP_API_URL`)
5. Deploy!

---

## 🧪 Testing
- Basic flow: Type a search query → get profile matches
- Validate cosine similarity = 1 - distance
- Add more profiles to `/backend/data/profiles.json` to scale search

---

## 🎯 Challenges Faced
- Handling API rate limits from OpenAI during batch embeddings
- Integrating FAISS with JavaScript (used `faiss-node` fallback)
- Ensuring real-time search latency under 1s

---

## 💡 Future Upgrades
- 🔍 Switch to Pinecone for hosted vector DB
- 👥 Add login & real user profiles
- 📝 Feedback + explanation system
- 🗃 Integrate with Supabase or MongoDB

---

## 🧑‍💻 Author
**Name**: Aditi Vaidya  
**Experience**: 3 Years  
**Last Working Day**: December 12, 2024  
**Notice Period**: Served — Immediate Joiner

---

## 📂 .gitignore Example
```
node_modules
.env
dist
build
.vscode
.DS_Store
```

---
