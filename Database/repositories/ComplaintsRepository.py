from Database.models.complaints import Complaints
from Database.repositories.BaseRepository import BaseRepository
from sqlalchemy import select


class ComplaintsRepository(BaseRepository):
    model = Complaints

    async def by_user_id(self, user_id: int) -> list[Complaints] | None:
        result = await self.session.execute(select(Complaints).where(Complaints.user_id == user_id))
        return result.scalars().all()
