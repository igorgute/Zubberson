from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.models.ride import Ride
from app.models.driver import Driver
from app.models.user import User
from app.schemas.ride import RideCreate, RideResponse
from app.utils.dependencies import require_driver, require_passenger, get_current_user

router = APIRouter(prefix="/rides", tags=["Rides"])


@router.post("/", response_model=RideResponse)
def create_ride(
    ride_data: RideCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_passenger)
):
    if current_user.id != ride_data.passenger_id:
        raise HTTPException(status_code=403, detail="Você só pode criar corrida para si mesmo")

    ride = Ride(
        passenger_id=ride_data.passenger_id,
        origem=ride_data.origem,
        destino=ride_data.destino,
        valor_estimado=ride_data.valor_estimado,
        status="solicitada"
    )

    db.add(ride)
    db.commit()
    db.refresh(ride)
    return ride


@router.get("/", response_model=list[RideResponse])
def list_rides(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if current_user.tipo == "passageiro":
        return db.query(Ride).filter(Ride.passenger_id == current_user.id).all()

    if current_user.tipo == "motorista":
        driver = db.query(Driver).filter(Driver.user_id == current_user.id).first()
        if not driver:
            return []
        return db.query(Ride).filter(Ride.driver_id == driver.id).all()

    return []


@router.put("/{ride_id}/accept", response_model=RideResponse)
def accept_ride(
    ride_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_driver)
):
    driver = db.query(Driver).filter(Driver.user_id == current_user.id).first()
    if not driver:
        raise HTTPException(status_code=404, detail="Perfil de motorista não encontrado")

    ride = db.query(Ride).filter(Ride.id == ride_id).first()
    if not ride:
        raise HTTPException(status_code=404, detail="Corrida não encontrada")

    if ride.status != "solicitada":
        raise HTTPException(status_code=400, detail="Essa corrida não está disponível")

    ride.driver_id = driver.id
    ride.status = "aceita"

    db.commit()
    db.refresh(ride)
    return ride


@router.put("/{ride_id}/finish", response_model=RideResponse)
def finish_ride(
    ride_id: int,
    valor_final: float,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_driver)
):
    driver = db.query(Driver).filter(Driver.user_id == current_user.id).first()
    if not driver:
        raise HTTPException(status_code=404, detail="Perfil de motorista não encontrado")

    ride = db.query(Ride).filter(Ride.id == ride_id, Ride.driver_id == driver.id).first()
    if not ride:
        raise HTTPException(status_code=404, detail="Corrida não encontrada para esse motorista")

    ride.status = "finalizada"
    ride.valor_final = valor_final

    db.commit()
    db.refresh(ride)
    return ride