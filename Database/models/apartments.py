from sqlalchemy import Column, Integer, ForeignKey, String, DECIMAL
from sqlalchemy.orm import relationship
from Database.base import Base


class Houses(Base):
    __tablename__ = 'Houses'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    address = Column(String)
    complex = Column(String)
    liter = Column(String)

    apartments = relationship("Apartments", back_populates="house", uselist=True, lazy=True)


class Apartments(Base):
    __tablename__ = "Apartments"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    house_id = Column(Integer, ForeignKey('Houses.id'), nullable=False)
    porch = Column(Integer)
    floor = Column(Integer)
    number = Column(Integer, unique=True)
    rooms = Column(Integer)
    area = Column(DECIMAL(2))
    price = Column(Integer)
    status = Column(String)

    house = relationship("Houses", back_populates="apartments", uselist=False, lazy=True)


class Apartment_owners(Base):
    __tablename__ = 'Apartment_owners'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    apartment_id = Column(Integer, ForeignKey('Apartments.id'), nullable=False, unique=True)
    owner_id = Column(Integer, ForeignKey('Users.id'), nullable=False)

    owner = relationship("Users", backref="apartments", uselist=False, lazy=True)
    apartment = relationship("Apartments", backref="owners", uselist=False, lazy=True)
