from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.base import AsyncDatabase
from Database.repositories.ChatsRepository import ChatsRepository
from FastAPI.schemas.ChatsSchema import ChatsOut, ChatsIn
from fastapi.responses import ORJSONResponse


router = APIRouter()


@router.get("/", response_model=List[ChatsOut], name="Get all messages")
async def get_complaints(skip: int = 0, limit: int = 0, session=Depends(AsyncDatabase.get_session)):
    messages = await ChatsRepository(session).all(skip, limit)
    if not messages:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Messages not found")
    return messages

@router.post("/", response_model=ChatsOut, name="Create message")
async def create_complaint(message: ChatsIn, session=Depends(AsyncDatabase.get_session)):
    message = await ChatsRepository(session).create(message.__dict__)
    return message
