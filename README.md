#  SentinelAI

> AI-powered Static Application Security Testing (SAST) platform that analyzes source code using a locally hosted Large Language Model (LLM) to detect security vulnerabilities and generate actionable recommendations.

---

##  Overview

SentinelAI is an AI-driven Static Application Security Testing (SAST) platform designed to help developers identify security vulnerabilities in source code before deployment.

Users can upload source code files through a modern React dashboard, where a FastAPI backend processes the file and sends it to a locally hosted Qwen2.5 LLM running on Ollama. The AI analyzes the code, identifies potential vulnerabilities, assigns severity levels, and generates detailed security recommendations.

All scan reports are stored in a SQLite database, allowing users to review previous analyses, export reports as PDF, and manage scan history.

---

##  Features

- AI-powered source code analysis
-  Static Application Security Testing (SAST)
-  Upload source code files
-  Detect common security vulnerabilities
-  Dashboard with scan statistics
-  Detailed AI-generated security reports
-  Export reports as PDF
-  Scan history management
-  Delete previous scans
-  SQLite database integration
-  FastAPI REST API
-  Modern React + Tailwind CSS interface
---

##  Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Vite

### Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite

### AI
- Ollama
- Qwen2.5:7B Large Language Model

### Tools
- Git
- GitHub
- VS Code

---

##  System Architecture


```text
                +----------------------+
                |      React UI        |
                +----------+-----------+
                           |
                    REST API Requests
                           |
                +----------v-----------+
                |       FastAPI        |
                +----------+-----------+
                           |
        +------------------+------------------+
        |                                     |
+-------v--------+                   +--------v--------+
|  Ollama LLM    |                   | SQLite Database |
|   Qwen2.5:7B   |                   | Scan History    |
+----------------+                   +-----------------+
```

---

##  Project Structure
```text
SentinelAI/
│
├── backend/
├── frontend/
├── screenshots/
├── README.md
└── .gitignore
```
---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rinitaganguly/SentinelAI.git
cd SentinelAI
```

### 2. Backend Setup

```bash
cd backend

python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### 3. Frontend Setup

Open a new terminal.

```bash
cd frontend

npm install

npm run dev
```

The frontend will start on:

```text
http://localhost:5173
```

The backend will start on:

```text
http://127.0.0.1:8000
```

---

## Usage

1. Open the React dashboard.
2. Upload a source code file.
3. Wait for the AI analysis to complete.
4. Review detected vulnerabilities.
5. Export the security report as a PDF.
6. View or delete previous scan reports from the History page.
---

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard` | Dashboard statistics |
| POST | `/upload` | Upload and analyze source code |
| GET | `/history` | Retrieve scan history |
| GET | `/scan/{id}` | Get a specific scan report |
| DELETE | `/history/{id}` | Delete a scan report |

---

##  Future Enhancements

- User authentication
- Cloud LLM support
- Multi-file project scanning
- OWASP Top 10 mapping
- CVSS scoring
- Docker deployment
- CI/CD pipeline

---

## Author

**Rinita Ganguly**

GitHub: https://github.com/rinitaganguly

---

##  License

This project is licensed under the MIT License.
