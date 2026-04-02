from sqlalchemy import Column, Integer, String, ForeignKey
from app.db import Base


class Vehicle(Base):
    __tablename__ = "vehicles"

    id = Column(Integer, primary_key=True, index=True)
    driver_id = Column(Integer, ForeignKey("drivers.id"), nullable=False)
    placa = Column(String, unique=True, nullable=False)
    modelo = Column(String, nullable=False)
    cor = Column(String, nullable=False)
    categoria = Column(String, nullable=False)