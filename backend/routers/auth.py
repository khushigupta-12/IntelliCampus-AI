from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.database import get_db
from models.user import User
from schemas.user import UserCreate, UserLogin
from utils.security import hash_password, verify_password
from utils.jwt_handler import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):

    existing = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    new_user = User(
        fullname=user.fullname,
        email=user.email,
        password=hash_password(user.password),
        role=user.role
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Registration Successful",
        "user": {
            "id": new_user.id,
            "fullname": new_user.fullname,
            "email": new_user.email,
            "role": new_user.role
        }
    }


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    existing = db.query(User).filter(
        User.email == user.email
    ).first()

    if not existing:
        raise HTTPException(
            status_code=401,
            detail="Invalid Email"
        )

    if not verify_password(user.password, existing.password):
        raise HTTPException(
            status_code=401,
            detail="Wrong Password"
        )

    token = create_access_token(
        {
            "id": existing.id,
            "email": existing.email,
            "role": existing.role
        }
    )

    return {
        "message": "Login Successful",
        "access_token": token,
        "token_type": "bearer",
        "role": existing.role
    }