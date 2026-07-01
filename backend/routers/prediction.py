from fastapi import APIRouter
from pydantic import BaseModel

from ml.predict import predict

router = APIRouter(
    prefix="/prediction",
    tags=["Prediction"]
)


class PredictionRequest(BaseModel):
    attendance: float
    study_hours: float
    internal_marks: float


@router.post("/")
def predict_student(data: PredictionRequest):

    cgpa = predict(
        data.attendance,
        data.study_hours,
        data.internal_marks
    )

    return {
        "predicted_cgpa": cgpa
    }