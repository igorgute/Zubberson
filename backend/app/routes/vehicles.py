from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db import get_db
from app.models.vehicle import Vehicle
from app.schemas.vehicle import VehicleCreate, VehicleResponse

router = APIRouter(prefix="/vehicles", tags=["Vehicles"])


@router.post("/", response_model=VehicleResponse)
def create_vehicle(vehicle_data: VehicleCreate, db: Session = Depends(get_db)):
    vehicle = Vehicle(**vehicle_data.dict())
    db.add(vehicle)
    db.commit()
    db.refresh(vehicle)
    return vehicle