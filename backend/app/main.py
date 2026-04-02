from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import Base, engine
from app.routes import auth, driver, vehicles, ride
from app.models import user, driver as driver_model, vehicle, ride as ride_model

Base.metadata.create_all(bind=engine)

app = FastAPI(title="API de Transporte")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(driver.router)
app.include_router(vehicles.router)
app.include_router(ride.router)


@app.get("/")
def root():
    return {"message": "API de transporte rodando"}