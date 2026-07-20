from datetime import datetime

from pydantic import BaseModel


class ScanCreate(BaseModel):
    target: str
    risk: str
    findings: str
    recommendations: str


class ScanResponse(ScanCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True