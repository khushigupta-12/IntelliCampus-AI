from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

from database.database import get_db
from services.gemini_service import ask_gemini
from services.faculty_ai import recommend_faculty
from models.chat import Chat

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)


class ChatRequest(BaseModel):
    message: str


@router.post("/")
def chat(req: ChatRequest, db: Session = Depends(get_db)):
    faculty = recommend_faculty(req.message)

    prompt = f"""
Student Question:
{req.message}

Recommended Faculty:
Name: {faculty['name']}
Department: {faculty['department']}
Subjects:
{", ".join(faculty['subjects'])}

Answer naturally and recommend this faculty if relevant.
"""

    answer = ask_gemini(prompt)

    new_chat = Chat(
        question=req.message,
        answer=answer
    )

    db.add(new_chat)
    db.commit()

    return {
        "faculty": faculty,
        "answer": answer
    }


@router.get("/history")
def get_history(db: Session = Depends(get_db)):
    chats = db.query(Chat).order_by(Chat.id.desc()).all()

    return chats