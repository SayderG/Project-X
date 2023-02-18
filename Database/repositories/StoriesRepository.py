from Database.models.stories import Stories
from Database.repositories.BaseRepository import BaseRepository
from sqlalchemy import select


class StoriesRepository(BaseRepository):
    model = Stories

    async def story_viewed(self, story_id: int, user_id: int, liked: bool):
        story = await self.session.execute(select(self.model).where(self.model.id == story_id))
        story = story.scalars().first()
        story.viewed.append(user_id)
        if liked:
            story.liked.append(user_id)
        await self.session.commit()
        return story
