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

    users = db.query(User).count()

    appointments = db.query(Appointment).count()

    chats = db.query(Chat).count()

    faculty = db.query(User).filter(
        User.role == "faculty"
    ).count()

    students = db.query(User).filter(
        User.role == "student"
    ).count()

    admins = db.query(User).filter(
        User.role == "admin"
    ).count()

    return {
        "users": users,
        "students": students,
        "faculty": faculty,
        "admins": admins,
        "appointments": appointments,
        "chats": chats
    }