from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.user import User
from models.appointment import Appointment
from models.chat import Chat

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):

    total_users = db.query(User).count()
    total_appointments = db.query(Appointment).count()
    total_chats = db.query(Chat).count()

    return {
        "users": total_users,
        "appointments": total_appointments,
        "chat_history": total_chats
    }