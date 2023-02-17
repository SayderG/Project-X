from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.base import AsyncDatabase
from Database.repositories.ApartmentsRepository import ApartmentsRepository
from FastAPI.schemas.ApartmentsSchema import ApartmentsOut, ApartmentsIn

router = APIRouter()


@router.get('/', name='Get all apartments', response_model=List[ApartmentsOut])
async def get_all_apartments(limit: int = 0, skip: int = 0, session=Depends(AsyncDatabase.get_session)):
    apartments = await ApartmentsRepository(session).all(limit, skip)
    return [apartment for apartment in apartments]


@router.get('/{apartment_id}', name='Get apartment by id', response_model=ApartmentsOut)
async def get_apartment_by_id(apartment_id: int, session=Depends(AsyncDatabase.get_session)):
    apartment = await ApartmentsRepository(session).by_id(apartment_id)
    if not apartment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Apartment not found')
    return apartment


@router.get('/user/{user_id}', name='Get apartments by user id', response_model=List[ApartmentsOut])
async def get_apartments_by_user_id(user_id: int, session=Depends(AsyncDatabase.get_session)):
    apartments = await ApartmentsRepository(session).by_user_id(user_id)
    if not apartments:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User apartments not found')
    return [apartment for apartment in apartments]


@router.post('/', name='Create apartment', response_model=ApartmentsOut)
async def create_apartment(apartment: ApartmentsIn, session=Depends(AsyncDatabase.get_session)):
    apartment = await ApartmentsRepository(session).create(apartment.__dict__)
    if not apartment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail='Apartment not created, this number already exists')
    return apartment


@router.delete('/{apartment_id}', response_model=ApartmentsOut, name='Delete apartment by id')
async def delete_apartment_by_id(apartment_id: int, session=Depends(AsyncDatabase.get_session)):
    apartment = await ApartmentsRepository(session).delete(apartment_id)
    if not apartment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Apartment not found')
    return apartment
