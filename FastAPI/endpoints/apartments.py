from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.base import AsyncDatabase
from Database.repositories.ApartmentsRepository import ApartmentsRepository
from FastAPI.schemas.ApartmentsSchema import ApartmentsOut, ApartmentsIn, HouseIn, HouseOut, ApartmentsOwnerIn, \
    ApartmentsOwnerOut

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


@router.get('/user/{user_id}', name='Get apartments by user id', response_model=ApartmentsOut)
async def get_apartments_by_user_id(user_id: int, session=Depends(AsyncDatabase.get_session)):
    apartment = await ApartmentsRepository(session).by_user_id(user_id)
    if not apartment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User apartments not found')
    return apartment


@router.get('/apartment/{apartment_id}', name='Get apartments by apartment id', response_model=ApartmentsOut)
async def get_apartments_by_user_id(apartment_id: int, session=Depends(AsyncDatabase.get_session)):
    apartment = await ApartmentsRepository(session).by_apartment_id(apartment_id)
    if not apartment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User apartments not found')
    return apartment


@router.get('/houses/', name='Get all houses', response_model=List[HouseOut])
async def get_all_houses(session=Depends(AsyncDatabase.get_session)):
    houses = await ApartmentsRepository(session).all_houses()
    return [house for house in houses]


@router.delete('/{apartment_id}', response_model=ApartmentsOut, name='Delete apartment by id')
async def delete_apartment_by_id(apartment_id: int, session=Depends(AsyncDatabase.get_session)):
    apartment = await ApartmentsRepository(session).delete(apartment_id)
    if not apartment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Apartment not found')
    return apartment


@router.post('/', name='Create apartment', response_model=ApartmentsOut)
async def create_apartment(apartment: ApartmentsIn, session=Depends(AsyncDatabase.get_session)):
    apartment = await ApartmentsRepository(session).create(apartment.__dict__)
    if not apartment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail='Apartment not created, this number already exists')
    return apartment


@router.post('/house', name='Create house', response_model=HouseOut)
async def create_apartment(house: HouseIn, session=Depends(AsyncDatabase.get_session)):
    house = await ApartmentsRepository(session).create_house(house.__dict__)
    if not house:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='house not created')
    return house


@router.post('/owner', name='Create owner', response_model=ApartmentsOwnerOut)
async def create_apartment(owner: ApartmentsOwnerIn, session=Depends(AsyncDatabase.get_session)):
    owner = await ApartmentsRepository(session).add_owner(owner.__dict__)
    if not owner:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='this apartment already has an owner')
    return owner
