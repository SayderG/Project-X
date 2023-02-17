from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from Database.repositories.ServiceRepository import ServiceRepository
from FastAPI.schemas.ServiceSchema import ServiceOut, ServiceIn, ServiceCustomerOut
from Database.base import AsyncDatabase

router = APIRouter()


@router.post("/", response_model=ServiceOut, name="Create new service")
async def create_service(service: ServiceIn, session=Depends(AsyncDatabase.get_session)):
    service = await ServiceRepository(session).create(service.__dict__)
    if not service:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Service not created")
    return service


@router.patch("/{service_id}", response_model=ServiceOut, name="Update service")
async def update_service(service_id: int, service: ServiceIn, session=Depends(AsyncDatabase.get_session)):
    service = await ServiceRepository(session).update(service_id, service.__dict__)
    if not service:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Service not found")
    return service


@router.get("/", response_model=List[ServiceCustomerOut], name="Get all service customers")
async def get_service_customers(skip: int = 0, limit: int = 0, session=Depends(AsyncDatabase.get_session)):
    services = await ServiceRepository(session).all(skip, limit)
    if not services:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Service customers not found")
    return services


@router.post("/{service_id}/customer/{customer_id}", response_model=ServiceCustomerOut,
             name="Create new service customer")
async def create_service_customer(service_id: int, customer_id: int, session=Depends(AsyncDatabase.get_session)):
    service = await ServiceRepository(session).create_service_customer(service_id, customer_id)
    if not service:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Service customer not created")
    return service


@router.get("/{service_id}", response_model=ServiceCustomerOut, name="Get service customer by id")
async def get_service_customer(service_id: int, session=Depends(AsyncDatabase.get_session)):
    service = await ServiceRepository(session).by_id(service_id)
    if not service:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Service customer not found")
    return service


@router.get("/{user_id}/all", response_model=List[ServiceCustomerOut], name="Get user services")
async def get_user_services(user_id: int, session=Depends(AsyncDatabase.get_session)):
    services = await ServiceRepository(session).services(user_id)
    if not services:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Services not found")
    return [service for service in services]
