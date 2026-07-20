from datetime import datetime

from sqlalchemy import Column, Integer, String, DateTime

from app.database.database import Base


class Scan(Base):
    __tablename__ = "scans"

    id = Column(Integer, primary_key=True, index=True)

    target = Column(String, nullable=False)

    risk = Column(String, nullable=False)

    findings = Column(String, nullable=False)

    recommendations = Column(String, nullable=False)

    created_at = Column(DateTime, default=datetime.utcnow)