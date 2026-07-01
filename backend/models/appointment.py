from sqlalchemy import Column, Integer, String, Date, Time, Text, TIMESTAMP
from sqlalchemy.sql import func
from database.database import Base


class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)

    student_id = Column(Integer)

    faculty_id = Column(Integer)

    appointment_date = Column(Date)

    appointment_time = Column(Time)

    reason = Column(Text)

    status = Column(String(30), default="Pending")

    created_at = Column(TIMESTAMP, server_default=func.now())