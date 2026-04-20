from pydantic import BaseModel


class DriverCreate(BaseModel):
    user_id: int
    cnh: str


class DriverResponse(BaseModel):
    id: int
    user_id: int
    cnh: str
    status_disponibilidade: str

    class Config:
        from_attributes = True