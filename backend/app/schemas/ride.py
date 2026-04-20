from pydantic import BaseModel
from typing import Optional


class RideCreate(BaseModel):
    passenger_id: int
    origem: str
    destino: str
    valor_estimado: Optional[float] = None


class RideResponse(BaseModel):
    id: int
    passenger_id: int
    driver_id: Optional[int] = None
    origem: str
    destino: str
    status: str
    valor_estimado: Optional[float] = None
    valor_final: Optional[float] = None

    class Config:
        from_attributes = True