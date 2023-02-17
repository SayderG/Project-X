from datetime import datetime
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from Database.base import Base


class Complaints(Base):
    __tablename__ = "Complaints"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('Users.id'))
    type = Column(String)
    title = Column(String)
    text = Column(String)
    date = Column(DateTime, default=datetime.utcnow())

    user = relationship("Users", backref="complaints", lazy=True)
