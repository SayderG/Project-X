from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime
from Database.base import Base


class Chats(Base):
    __tablename__ = 'Chats'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    text = Column(String)
    datetime = Column(DateTime, default=datetime.utcnow())

