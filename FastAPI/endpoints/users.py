from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.repositories.UserRepository import UsersRepository
from FastAPI.schemas.UserSchema import UserOut, UserTelegram, UserProfile, UserUpdateOut

from Database.base import AsyncDatabase

router = APIRouter()


@router.patch("/{user_id}", response_model=UserUpdateOut, name="Update user profile")
async def update_user(user_id: int, user: UserProfile, session=Depends(AsyncDatabase.get_session)):
    user = await UsersRepository(session).update(user_id, user.__dict__)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return UserUpdateOut(id=user.id, profile=UserProfile(**user.profile.__dict__))


@router.get("/", response_model=List[UserOut], name="Get all users with all info")
async def get_users(skip: int = 0, limit: int = 0, session=Depends(AsyncDatabase.get_session)):
    users = await UsersRepository(session).all_full(skip, limit)
    if not users:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Users not found")
    return [UserOut(id=user.id, telegram=UserTelegram(**user.telegram.__dict__),
                    profile=UserProfile(**user.profile.__dict__)) for user in users]


@router.get("/{user_id}", response_model=UserOut, name="Get user by id")
async def get_user(user_id: int, session=Depends(AsyncDatabase.get_session)):
    user = await UsersRepository(session).full_by_id(user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return UserOut(id=user.id, telegram=UserTelegram(**user.telegram.__dict__),
                   profile=UserProfile(**user.profile.__dict__))


