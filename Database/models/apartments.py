from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from Database.base import Base


class Apartments(Base):
    __tablename__ = "Apartaments"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    owner_id = Column(Integer, ForeignKey('Users.id'))
    number = Column(Integer, unique=True)
    floor = Column(Integer)
    area = Column(Integer)
    rooms = Column(Integer)

    owner = relationship("Users", backref="apartments", lazy=True)
