from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import get_db
from app.models.driver import Driver
from app.models.user import User
from app.schemas.driver import DriverCreate, DriverResponse
from app.utils.dependencies import require_driver

router = APIRouter(prefix="/drivers", tags=["Drivers"])


@router.post("/", response_model=DriverResponse)
def create_driver(
    driver_data: DriverCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(require_driver)
):
    if current_user.id != driver_data.user_id:
        raise HTTPException(status_code=403, detail="Você só pode criar perfil para si mesmo")

    existing_driver = db.query(Driver).filter(Driver.user_id == driver_data.user_id).first()
    if existing_driver:
        raise HTTPException(status_code=400, detail="Perfil de motorista já existe")

    driver = Driver(
        user_id=driver_data.user_id,
        cnh=driver_data.cnh
    )

    db.add(driver)
    db.commit()
    db.refresh(driver)
    return driver