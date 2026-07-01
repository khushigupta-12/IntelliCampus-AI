import joblib

model=joblib.load("ml/student_model.pkl")

def predict(attendance,study_hours,internal_marks):

    result=model.predict([[attendance,study_hours,internal_marks]])

    return round(result[0],2)