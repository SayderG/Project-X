from sqlalchemy import Column, String, BigInteger, Integer, ForeignKey, Boolean
from sqlalchemy.orm import relationship, backref
from Database.base import Base


class Users(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    telegram_id = Column(Integer, ForeignKey('Telegrams.id'))
    profile_id = Column(Integer, ForeignKey('Profiles.id'))

    telegram = relationship("Telegrams", backref=backref("owner", uselist=False), lazy=True)
    profile = relationship("Profiles", backref=backref("owner", uselist=False), lazy=True)


class Telegrams(Base):
    __tablename__ = "Telegrams"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    account_id = Column(BigInteger, unique=True)
    username = Column(String)
    first_name = Column(String)


class Profiles(Base):
    __tablename__ = "Profiles"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    apartment_count = Column(Integer, default=0)
    gender = Column(String)
    pet = Column(Boolean, default=False)
    spouse = Column(Boolean, default=False)
    children = Column(Boolean, default=False)
