from fastapi import APIRouter, Depends, HTTPException, status
from Database.base import AsyncDatabase
from Database.repositories.DiscussionsRepository import DiscussionRepository
from FastAPI.schemas.VotingSchema import VoteOut, VoteIn, VoteInfoOut

router = APIRouter()


@router.post('/', response_model=VoteOut, name='Add user vote to any discussion')
async def create_vote(UserVote: VoteIn, session=Depends(AsyncDatabase.get_session)):
    vote = await DiscussionRepository(session).add_vote(UserVote.__dict__)
    if not vote:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="You have already voted")
    return vote


@router.get('/{discussion_id}', response_model=VoteInfoOut, name='Get voting info by discussion id')
async def get_voting_info(discussion_id: int, session=Depends(AsyncDatabase.get_session)):
    info = await DiscussionRepository(session).get_voting(discussion_id)
    print(info)

    if not info:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discussion not found")
    return info
