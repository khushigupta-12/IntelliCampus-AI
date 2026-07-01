from sqlalchemy import Column, Integer, String, Text
from database.database import Base


class Chat(Base):
    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(Text)
    answer = Column(Text)