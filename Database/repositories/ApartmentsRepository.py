from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import selectinload

from Database.models.apartments import Apartments, Houses, Apartment_owners
from Database.repositories.BaseRepository import BaseRepository
from sqlalchemy import select


class ApartmentsRepository(BaseRepository):
    model = Apartments

    async def by_user_id(self, user_id: int) -> list[Apartments] | None:
        result = await self.session.execute(select(Apartment_owners)
                                            .options(selectinload(Apartment_owners.owner),
                                                     selectinload(Apartment_owners.apartment))
                                            .where(Apartment_owners.owner_id == user_id))
        return result.scalars().filrst()

    async def by_apartment_id(self, apartment_id: int):
        result = await self.session.execute(select(Apartment_owners)
                                            .options(selectinload(Apartment_owners.owner),
                                                     selectinload(Apartment_owners.apartment))
                                            .where(Apartment_owners.apartment_id == apartment_id))
        return result.scalars().first()

    async def all_houses(self):
        result = await self.session.execute(select(Houses))
        return result.scalars().all()

    async def create_house(self, house_data: dict):
        house = Houses(**house_data)
        self.session.add(house)
        await self.session.commit()
        return house

    async def add_owner(self, own_data: dict):
        try:
            owner = Apartment_owners(**own_data)
            self.session.add(owner)
            await self.session.commit()
            return owner
        except IntegrityError:
            return None
