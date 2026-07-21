from fastapi import FastAPI, Depends, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.database.database import Base, engine, get_db
from app.models.scan import Scan
from app.services.ai_service import analyze_code
import json
import os
from dotenv import load_dotenv

load_dotenv()

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="SentinelAI Backend")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "SentinelAI Backend Running"}


@app.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    scans = db.query(Scan).order_by(Scan.created_at.desc()).all()

    total_scans = len(scans)

    critical = sum(
        1
        for scan in scans
        if scan.risk.lower() == "high"
    )

    security_score = max(0, 100 - critical * 10)

    return {
        "stats": {
            "security_score": security_score,
            "total_scans": total_scans,
            "critical_issues": critical,
            "models_online": 1,
        },
        "models": [
            {
                "id": 1,
                "name": "SentinelAI",
                "version": "1.0.0",
                "status": "Online",
            }
        ],
        "recent_scans": [
            {
                "id": scan.id,
                "target": scan.target,
                "risk": scan.risk,
                "created_at": scan.created_at.isoformat(),
            }
            for scan in scans[:10]
        ],
    }


@app.post("/scan")
def scan(db: Session = Depends(get_db)):
    report = {
        "risk": "Medium",
        "findings": [
            {
                "item": "Demo vulnerability",
                "severity": "Medium",
            }
        ],
        "recommendations": [
            "Replace this demo report with AI-generated results."
        ],
    }

    new_scan = Scan(
        target="SentinelAI",
        risk=report["risk"],
        findings=json.dumps(report["findings"]),
        recommendations=json.dumps(report["recommendations"]),
    )

    db.add(new_scan)
    db.commit()
    db.refresh(new_scan)

    return report


@app.get("/history")
def history(db: Session = Depends(get_db)):
    scans = (
        db.query(Scan)
        .order_by(Scan.created_at.desc())
        .all()
    )

    return [
        {
            "id": scan.id,
            "target": scan.target,
            "risk": scan.risk,
            "vulnerabilities": json.loads(scan.findings),
            "recommendations": json.loads(scan.recommendations),
            "created_at": scan.created_at.isoformat(),
        }
        for scan in scans
    ]


@app.get("/scan/{scan_id}")
def get_scan(scan_id: int, db: Session = Depends(get_db)):
    scan = (
        db.query(Scan)
        .filter(Scan.id == scan_id)
        .first()
    )

    if scan is None:
        return {"message": "Scan not found"}

    return {
        "id": scan.id,
        "target": scan.target,
        "risk": scan.risk,
        "vulnerabilities": json.loads(scan.findings),
        "recommendations": json.loads(scan.recommendations),
        "created_at": scan.created_at.isoformat(),
    }


@app.delete("/history/{scan_id}")
def delete_scan(scan_id: int, db: Session = Depends(get_db)):
    scan = (
        db.query(Scan)
        .filter(Scan.id == scan_id)
        .first()
    )

    if scan is None:
        return {"message": "Scan not found"}

    db.delete(scan)
    db.commit()

    return {"message": "Deleted successfully"}


@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    os.makedirs("uploads", exist_ok=True)

    filepath = f"uploads/{file.filename}"

    content = await file.read()

    with open(filepath, "wb") as buffer:
        buffer.write(content)

    try:
        code = content.decode("utf-8")
    except UnicodeDecodeError:
        return {
            "error": "Unable to read this file as text."
        }

    analysis = analyze_code(code)

    new_scan = Scan(
        target=file.filename,
        risk=analysis["risk"],
        findings=json.dumps(analysis["vulnerabilities"]),
        recommendations=json.dumps(analysis["recommendations"]),
    )

    db.add(new_scan)
    db.commit()
    db.refresh(new_scan)

    return {
        "id": new_scan.id,
        "filename": file.filename,
        "lines": len(code.splitlines()),
        **analysis,
    }