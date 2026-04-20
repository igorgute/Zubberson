from sqlalchemy import Column, Integer, String
from app.db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    telefone = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=True)
    senha_hash = Column(String, nullable=False)
    tipo = Column(String, nullable=False)  # passageiro ou motorista