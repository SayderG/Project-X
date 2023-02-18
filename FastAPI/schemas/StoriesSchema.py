from typing import List
from pydantic import BaseModel, validator


# Stories Schema
class Stories(BaseModel):
    image: str
    status: str
    content: str

    @validator('status')
    def status_validator(cls, v):
        if v not in ['important', 'new', 'regular']:
            raise ValueError('status must be important, new or regular')
        return v

class StoriesIn(Stories):
    pass


class StoriesOut(Stories):
    id: int
    liked: List[int]
    viewed: List[int]

    class Config:
        orm_mode = True
