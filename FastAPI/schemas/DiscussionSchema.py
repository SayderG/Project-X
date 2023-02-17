from datetime import datetime

from pydantic import BaseModel, validator


class Discussion(BaseModel):
    creator_id: int
    type: str
    title: str
    text: str

    @validator('type')
    def type_validator(cls, value):
        if value.lower() not in ['survey ', 'voting']:
            raise ValueError('Type must be in [survey, voting]')
        return value.lower()


class DiscussionIn(Discussion):
    pass


class DiscussionOut(Discussion):
    id: int
    created_at: datetime

    class Config():
        orm_mode = True
