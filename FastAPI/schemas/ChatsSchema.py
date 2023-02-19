from datetime import datetime
from pydantic import BaseModel, validator


class Chats(BaseModel):
    text: str


class ChatsIn(Chats):
    pass


class ChatsOut(Chats):
    id: int
    datetime: datetime

    class Config:
        orm_mode = True
