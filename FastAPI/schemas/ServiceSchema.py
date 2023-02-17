from datetime import datetime, time
from typing import Optional
from pydantic import BaseModel, validator


class Service(BaseModel):
    title: str
    description: str
    price: int
    duration: time

    @validator('duration')
    def duration_validator(cls, value):
        if value < time(0, 0, 0):
            raise ValueError('Duration must be positive')
        return value

    @validator('price')
    def price_validator(cls, value):
        if value < 0:
            raise ValueError('Price must be positive')
        return value


class ServiceIn(Service):
    pass


class ServiceOut(Service):
    id: Optional[int] = None

    class Config:
        orm_mode = True


class ServiceCustomer(BaseModel):
    status: str
    service_id: int
    customer_id: int
    @validator('status')
    def status_validator(cls, value):
        if value.lower() not in ['active', 'inactive', 'completed', 'cancelled']:
            raise ValueError('Status must be in [active, inactive, completed, cancelled]')
        return value.lower()

class ServiceCustomerIn(ServiceCustomer):
    pass
class ServiceCustomerOut(ServiceCustomer):
    id: Optional[int] = None
    created: datetime
    class Config:
        orm_mode = True

class FullServiceCustomerOut(ServiceCustomer):
    id: Optional[int] = None
    created: datetime
    service: list[ServiceOut]
    class Config:
        orm_mode = True