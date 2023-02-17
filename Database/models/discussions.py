from sqlalchemy import Column, String, Integer, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from Database.base import Base
from datetime import datetime


class Discussions(Base):
    __tablename__ = 'Discussions'

    id = Column(Integer, primary_key=True)
    creator_id = Column(Integer, ForeignKey('Users.id'), nullable=False)
    type = Column(String, nullable=False)
    title = Column(String, nullable=False)
    text = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow())

    voting = relationship("Discussion_voices", back_populates="discussion", lazy=True)


class Discussion_voices(Base):
    __tablename__ = "Discussion_voices"

    id = Column(Integer, primary_key=True)
    discussion_id = Column(Integer, ForeignKey('Discussions.id'), nullable=False)
    voter_id = Column(Integer, ForeignKey('Users.id'), nullable=False)
    vote = Column(Boolean, nullable=False)

    discussion = relationship("Discussions", back_populates="voting", lazy=True)
