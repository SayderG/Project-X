from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.base import AsyncDatabase
from Database.repositories.DiscussionsRepository import DiscussionRepository
from FastAPI.schemas.DiscussionSchema import DiscussionOut, DiscussionIn

router = APIRouter()


@router.post("/", response_model=DiscussionOut, name="Create discussion")
async def create_discussion(discussion: DiscussionIn, session=Depends(AsyncDatabase.get_session)):
    discussion = await DiscussionRepository(session).create(discussion.__dict__)
    if not discussion:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discussion not created")
    return discussion


@router.delete("/", response_model=DiscussionOut, name="Delete discussion")
async def delete_discussion(discussion_id: int, session=Depends(AsyncDatabase.get_session)):
    discussion = await DiscussionRepository(session).delete(discussion_id)
    if not discussion:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discussion not found")
    return discussion


@router.get("/", response_model=List[DiscussionOut], name="Get all discussions")
async def get_all_discussions(skip: int = 0, limit: int = 0, session=Depends(AsyncDatabase.get_session)):
    discussions = await DiscussionRepository(session).all(limit, skip)
    if not discussions:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discussion not found")
    return [discussion for discussion in discussions]


@router.get("/{discussion_id}", response_model=DiscussionOut, name="Get discussion by id")
async def get_discussion_by_id(discussion_id: int, session=Depends(AsyncDatabase.get_session)):
    discussion = await DiscussionRepository(session).by_id(discussion_id)
    if not discussion:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Discussion not found")
    return discussion
