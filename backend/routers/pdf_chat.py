from fastapi import APIRouter, UploadFile, File
import os

from services.pdf_service import extract_text
from services.gemini_service import ask_gemini

router = APIRouter(
    prefix="/pdf",
    tags=["PDF AI"]
)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    os.makedirs("uploads", exist_ok=True)

    filepath = f"uploads/{file.filename}"

    with open(filepath, "wb") as f:
        f.write(await file.read())

    text = extract_text(filepath)

    prompt = f"""
You are an academic assistant.

Read the following document and summarize it.

{text[:12000]}
"""

    answer = ask_gemini(prompt)

    return {
        "filename": file.filename,
        "summary": answer
    }