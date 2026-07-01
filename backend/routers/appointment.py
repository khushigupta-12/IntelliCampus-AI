from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database.database import get_db
from models.appointment import Appointment
from schemas.appointment import AppointmentCreate

router = APIRouter(
    prefix="/appointments",
    tags=["Appointments"]
)


@router.post("/book")
def book_appointment(
    appointment: AppointmentCreate,
    db: Session = Depends(get_db)
):

    new_appointment = Appointment(
        student_id=appointment.student_id,
        faculty_id=appointment.faculty_id,
        appointment_date=appointment.appointment_date,
        appointment_time=appointment.appointment_time,
        reason=appointment.reason
    )

    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)

    return {
        "message": "Appointment Booked Successfully",
        "appointment_id": new_appointment.id
    }


@router.get("/")
def get_all_appointments(db: Session = Depends(get_db)):
    return db.query(Appointment).all()