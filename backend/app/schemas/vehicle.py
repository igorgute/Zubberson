from pydantic import BaseModel


class VehicleCreate(BaseModel):
    driver_id: int
    placa: str
    modelo: str
    cor: str
    categoria: str


class VehicleResponse(BaseModel):
    id: int
    driver_id: int
    placa: str
    modelo: str
    cor: str
    categoria: str

    class Config:
        from_attributes = True