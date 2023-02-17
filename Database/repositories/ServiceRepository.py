from sqlalchemy.orm import selectinload
from Database.models.services import Services, Service_customers
from Database.repositories.BaseRepository import BaseRepository
from sqlalchemy import select


class ServiceRepository(BaseRepository):
    model = Service_customers

    async def update(self, service_id, service_update: dict) -> Services | None:
        try:
            result = await self.session.execute(select(Services).where(Services.id == service_id))
            service = result.scalars().first()
            for key, value in service_update.items():
                setattr(service, key, value)
            await self.session.commit()
            return service
        except Exception:
            return None

    async def add_customer(self, service_id: int, user_id) -> Service_customers:
        customer = Service_customers(service_id=service_id, customer_id=user_id)
        self.session.add(customer)
        await self.session.commit()
        return customer

    async def update_status(self, service_id: int, user_id, status: str) -> Service_customers:
        result = await self.session.execute(select(Service_customers).where(Service_customers.service_id == service_id)
                                            .where(Service_customers.customer_id == user_id))
        customer = result.scalars().first()
        customer.status = status
        await self.session.commit()
        return customer

    async def services(self, user_id: int):
        result = await self.session.execute(select(Service_customers)
                                            .options(selectinload(Service_customers.service))
                                            .where(Service_customers.customer_id == user_id))
        return result.scalars().all()

    async def create_service_customer(self, service_id, customer_id):
        service = Service_customers(service_id=service_id, customer_id=customer_id)
        self.session.add(service)
        await self.session.commit()
        return service
