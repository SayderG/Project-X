from sqlalchemy import Column, Integer, ForeignKey, String
from sqlalchemy.orm import relationship
from Database.base import Base


class Houses(Base):
    __tablename__ = 'Houses'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    address = Column(String)

    apartments = relationship("Apartments", back_populates="house", uselist=True, lazy=True)


class Apartments(Base):
    __tablename__ = "Apartments"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    owner_id = Column(Integer, ForeignKey('Users.id'), nullable=False)
    house_id = Column(Integer, ForeignKey('Houses.id'), nullable=False)
    number = Column(Integer, unique=True)
    floor = Column(Integer)
    area = Column(Integer)
    rooms = Column(Integer)

    owner = relationship("Users", backref="apartments", lazy=True)
    house = relationship("Houses", back_populates="apartments", uselist=False, lazy=True)
