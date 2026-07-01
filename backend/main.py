from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.chat import Chat
from routers.chat import router as chat_router
from routers.admin import router as admin_router
from database.database import engine, Base
from routers.prediction import router as prediction_router
from models.user import User
from models.appointment import Appointment
from routers.pdf_chat import router as pdf_router
from routers.auth import router as auth_router
from routers.appointment import router as appointment_router

app = FastAPI(title="IntelliCampus AI")

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(appointment_router)
app.include_router(prediction_router)
app.include_router(chat_router)    
app.include_router(admin_router)
app.include_router(pdf_router)
@app.get("/")
def root():
    return {
        "message": "IntelliCampus AI Backend Running 🚀"
    }