from typing import Optional
from pydantic import BaseModel, validator


class UserTelegram(BaseModel):
    account_id: int
    first_name: str
    username: str

    class Config:
        orm_mode = True


class UserProfile(BaseModel):
    apartment_count: int = 0
    gender: Optional[str] = None
    pet: bool = False
    spouse: bool = False
    children: bool = False

    @validator('apartment_count')
    def validate_apartment_count(cls, value):
        if value < 0:
            return ValueError('Apartment count must be greater than 0')
        return value

    @validator('gender')
    def validate_gender(cls, value):
        if value is None:
            return value
        if value.lower() not in ['Male', 'Female']:
            return ValueError('Type must be Male or Female')

        return value.lower()

    class Config:
        orm_mode = True


class UserIn(BaseModel):
    telegram_id: int
    profile_id: int


class UserOut(BaseModel):
    id: Optional[int] = None
    telegram: UserTelegram
    profile: UserProfile

    class Config:
        orm_mode = True


class UserUpdateOut(BaseModel):
    id: Optional[int] = None
    profile: UserProfile

    class Config:
        orm_mode = True
