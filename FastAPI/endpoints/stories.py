from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.repositories.StoriesRepository import StoriesRepository
from FastAPI.schemas.StoriesSchema import StoriesIn, StoriesOut

from Database.base import AsyncDatabase

router = APIRouter()


@router.post("/", response_model=StoriesOut, name="create stories")
async def create_stories(story: StoriesIn, session: AsyncDatabase = Depends(AsyncDatabase.get_session)):
    story = await StoriesRepository(session).create(story.__dict__)
    if not story:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Story not created')
    return story


@router.get("/", response_model=List[StoriesOut], name="get all stories")
async def get_stories(skip: int = 0, limit: int = 0, session=Depends(AsyncDatabase.get_session)):
    stories = await StoriesRepository(session).all(skip, limit)
    if not stories:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="stories not found")
    return stories


@router.put("/{story_id}/{user_id}", response_model=StoriesOut, name="user view and like story update")
async def view_and_like_story(story_id: int, user_id: int, liked: bool, session=Depends(AsyncDatabase.get_session)):
    story = await StoriesRepository(session).story_viewed(story_id, user_id, liked)
    if not story:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="story not found")
    return story
