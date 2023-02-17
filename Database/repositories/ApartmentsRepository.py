from Database.models.apartments import Apartments
from Database.repositories.BaseRepository import BaseRepository
from sqlalchemy import select


class ApartmentsRepository(BaseRepository):
    model = Apartments

    async def by_user_id(self, user_id: int) -> list[Apartments] | None:
        result = await self.session.execute(select(Apartments).where(Apartments.owner_id == user_id))
        return result.scalars().all()
