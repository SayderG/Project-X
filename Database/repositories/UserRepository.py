from sqlalchemy.orm import selectinload, query
from Database.models.users import Users, Telegrams, Profiles
from Database.repositories.BaseRepository import BaseRepository
from sqlalchemy import select
from Database.base import AsyncDatabase
import asyncio


class UsersRepository(BaseRepository):
    model = Users

    async def create_from_bot(self, telegram: dict) -> Users:
        user = Users(telegram=Telegrams(**telegram),
                     profile=Profiles())
        self.session.add(user)
        await self.session.commit()
        return user

    async def update(self, user_id, profile: dict) -> Users | None:
        result = await self.session.execute(select(Users)
                                            .options(selectinload(Users.profile)).where(Users.id == user_id))
        user = result.scalars().first()
        for key, value in profile.items():
            setattr(user.profile, key, value)
        await self.session.commit()
        return user

    async def all_full(self, limit, skip) -> list[Users]:
        result = await self.session.execute(select(Users)
                                            .options(selectinload(Users.telegram), selectinload(Users.profile))
                                            .offset(skip)
                                            .limit(limit))
        return result.scalars().all()

    async def full_by_id(self, user_id: int) -> Users | None:
        result = await self.session.execute(select(Users)
                                            .options(selectinload(Users.telegram), selectinload(Users.profile))
                                            .where(Users.id == user_id))
        return result.scalars().first()

    async def by_tg_id(self, telegram_id: int) -> Users | None:
        result = await self.session.execute(select(Telegrams)
                                            .options(selectinload(Telegrams.owner))
                                            .where(Telegrams.account_id == telegram_id))
        return result.scalars().first()
