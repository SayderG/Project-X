from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.base import AsyncDatabase
from Database.repositories.ComplaintsRepository import ComplaintsRepository
from FastAPI.schemas.ComplaintsSchema import ComplaintsOut, ComplaintsIn

router = APIRouter()


@router.get("/", response_model=List[ComplaintsOut], name="Get all complaints")
async def get_complaints(skip: int = 0, limit: int = 0, session=Depends(AsyncDatabase.get_session)):
    complaints = await ComplaintsRepository(session).all(skip, limit)
    if not complaints:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Complaints not found")
    return complaints

@router.get("/{complaint_id}", response_model=ComplaintsOut, name="Get complaint by id")
async def get_complaint(complaint_id: int, session=Depends(AsyncDatabase.get_session)):
    complaint = await ComplaintsRepository(session).by_id(complaint_id)
    if not complaint:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Complaint not found")
    return complaint

@router.get("/user/{user_id}", response_model=List[ComplaintsOut], name="Get complaints by user id")
async def get_complaints_by_user(user_id: int, session=Depends(AsyncDatabase.get_session)):
    complaints = await ComplaintsRepository(session).by_user_id(user_id)
    if not complaints:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Complaints not found")
    return complaints

@router.delete("/{complaint_id}", response_model=ComplaintsOut, name="Delete complaint by id")
async def delete_complaint(complaint_id: int, session=Depends(AsyncDatabase.get_session)):
    complaint = await ComplaintsRepository(session).delete(complaint_id)
    if not complaint:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Complaint not found")
    return complaint

@router.post("/", response_model=ComplaintsOut, name="Create complaint")
async def create_complaint(complaint: ComplaintsIn, session=Depends(AsyncDatabase.get_session)):
    complaint = await ComplaintsRepository(session).create(complaint.__dict__)
    return complaint
