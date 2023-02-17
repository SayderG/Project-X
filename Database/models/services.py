from datetime import datetime, time
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, Time
from sqlalchemy.orm import relationship, backref
from Database.base import Base


class Services(Base):
    __tablename__ = "Services"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String)
    description = Column(String)
    price = Column(Integer)
    duration = Column(Time, default=time(0, 0, 0))


class Service_customers(Base):
    __tablename__ = "Service_customers"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    service_id = Column(Integer, ForeignKey('Services.id'))
    customer_id = Column(Integer, ForeignKey('Users.id'))
    status = Column(String)
    created = Column(DateTime, default=datetime.utcnow())

    service = relationship("Services", backref=backref('customer'), lazy=True)
    customer = relationship("Users", backref=backref("services"), lazy=True)
