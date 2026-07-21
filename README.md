# SentinelAI

An AI-powered Static Application Security Testing (SAST) platform that analyzes source code for security vulnerabilities using Large Language Models (LLMs).

SentinelAI allows developers to upload source code files and receive an AI-generated security report containing detected vulnerabilities, severity levels, risk assessment, and security recommendations.

---

# Live Demo

Frontend:
https://sentinel-ai-ten-virid.vercel.app

> Backend deployment coming soon.

---

# Features

- AI-powered security analysis
- Source code upload
- Automatic vulnerability detection
- Risk assessment (Low / Medium / High / Critical)
- Security recommendations
- Dashboard with scan statistics
- Scan history
- Individual scan reports
- Delete scan history
- REST API
- SQLite database
- Modern React UI

---

# Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

## Backend

- FastAPI
- SQLAlchemy
- SQLite
- Python

## AI

- Groq API
- Llama 3.3 70B Versatile

## Tools

- Git
- GitHub
- VS Code

---

# System Architecture

```text
                User
                  │
                  ▼
        React Frontend
             (Vercel)
                  │
                  ▼
         FastAPI Backend
                  │
                  ▼
             Groq API
                  │
                  ▼
       Llama 3.3 70B Model
```

---

# Project Structure

```
SentinelAI
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── core
│   │   ├── database
│   │   ├── models
│   │   ├── schemas
│   │   ├── services
│   │   └── uploads
│   │
│   ├── requirements.txt
│   └── main.py
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

# AI Workflow

1. User uploads a source code file.
2. FastAPI receives the file.
3. Source code is sent to the Groq API.
4. The AI analyzes the code for security vulnerabilities.
5. The response is converted into structured JSON.
6. SentinelAI calculates the final risk level.
7. The report is stored in SQLite.
8. Results are displayed on the dashboard.

---

# Security Checks

SentinelAI can detect issues related to:

- SQL Injection
- Command Injection
- Path Traversal
- Hardcoded Secrets
- Weak Cryptography
- Missing Input Validation
- Unsafe File Handling
- Missing Authentication
- Missing Authorization
- Resource Leaks
- Error Handling Issues
- Logic Flaws
- Integer Overflow
- Buffer Overflow
- Division by Zero

---

# Installation

## Clone the repository

```bash
git clone https://github.com/rinitaganguly/SentinelAI.git
```

---

## Backend

```bash
cd backend

python -m venv .venv

.venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=your_groq_api_key
```

Run the backend

```bash
uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Health Check |
| GET | `/dashboard` | Dashboard statistics |
| POST | `/upload` | Upload and analyze source code |
| GET | `/history` | Retrieve scan history |
| GET | `/scan/{id}` | Retrieve specific report |
| DELETE | `/history/{id}` | Delete scan |

---

# Database

SQLite stores:

- Uploaded file information
- Scan history
- Risk level
- Vulnerabilities
- Recommendations
- Scan timestamps

---

# Future Improvements

- User Authentication
- Docker Support
- Multi-file Scanning
- OWASP Top 10 Mapping
- CI/CD Pipeline
- Multi-language Support
- Cloud Database
- CVE Integration
- PDF Report Enhancements
- Team Collaboration

---

# Author

**Rinita Ganguly**

GitHub

https://github.com/rinitaganguly


---

# License

This project is licensed under the MIT License.