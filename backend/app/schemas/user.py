from pydantic import BaseModel, EmailStr
from typing import Optional


class UserCreate(BaseModel):
    nome: str
    telefone: str
    email: Optional[EmailStr] = None
    senha: str
    tipo: str


class UserLogin(BaseModel):
    telefone: str
    senha: str


class UserResponse(BaseModel):
    id: int
    nome: str
    telefone: str
    email: Optional[EmailStr] = None
    tipo: str