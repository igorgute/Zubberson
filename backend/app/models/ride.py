from sqlalchemy import Column, Integer, String, ForeignKey, Float
from app.db import Base


class Ride(Base):
    __tablename__ = "rides"

    id = Column(Integer, primary_key=True, index=True)
    passenger_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    driver_id = Column(Integer, ForeignKey("drivers.id"), nullable=True)
    origem = Column(String, nullable=False)
    destino = Column(String, nullable=False)
    status = Column(String, default="solicitada")
    valor_estimado = Column(Float, nullable=True)
    valor_final = Column(Float, nullable=True)