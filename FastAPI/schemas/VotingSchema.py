from pydantic import BaseModel


class Vote(BaseModel):
    discussion_id: int
    voter_id: int
    vote: bool


class VoteIn(Vote):
    pass


class VoteOut(Vote):
    id: int

    class Config:
        orm_mode = True


class VoteInfoOut(BaseModel):
    title: str
    text: str
    type: str
    yes: int
    no: int
    user_count: int

    class Config:
        orm_mode = True
