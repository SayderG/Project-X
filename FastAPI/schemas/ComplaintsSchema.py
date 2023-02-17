from datetime import datetime
from pydantic import BaseModel, validator


class Complaints(BaseModel):
    user_id: int
    type: str
    title: str
    text: str

    @validator('type')
    def type_validator(cls, value):
        if value.lower() not in ['complaint', 'suggestion']:
            raise ValueError('Type must be in [complaint, suggestion]')
        return value.lower()


class ComplaintsOut(Complaints):
    id: int
    date: datetime

    class Config:
        orm_mode = True


class ComplaintsIn(Complaints):
    pass
