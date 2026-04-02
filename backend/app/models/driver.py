from sqlalchemy import Column, Integer, String, ForeignKey
from app.db import Base


class Driver(Base):
    __tablename__ = "drivers"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    cnh = Column(String, unique=True, nullable=False)
    status_disponibilidade = Column(String, default="offline")