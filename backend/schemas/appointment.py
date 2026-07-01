from pydantic import BaseModel
from datetime import date, time


class AppointmentCreate(BaseModel):
    student_id: int
    faculty_id: int
    appointment_date: date
    appointment_time: time
    reason: str