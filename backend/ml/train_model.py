import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

data = pd.DataFrame({
    "attendance":[40,50,60,70,80,90,95],
    "study_hours":[1,2,3,4,5,6,7],
    "internal_marks":[10,15,20,25,28,30,30],
    "cgpa":[4.5,5.2,6.0,7.1,8.2,9.0,9.6]
})

X=data[["attendance","study_hours","internal_marks"]]
y=data["cgpa"]

model=LinearRegression()

model.fit(X,y)

joblib.dump(model,"ml/student_model.pkl")

print("Model Trained Successfully")