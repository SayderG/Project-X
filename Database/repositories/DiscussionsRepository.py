from sqlalchemy.orm import selectinload
from Database.models.discussions import Discussions, Discussion_voices
from Database.repositories.BaseRepository import BaseRepository
from sqlalchemy import select, func, distinct


class DiscussionRepository(BaseRepository):
    model = Discussions

    async def _check_user_vote(self, discussion_id, user_id):
        result = await self.session.execute(select(Discussion_voices)
                                            .where(Discussion_voices.discussion_id == discussion_id,
                                                   Discussion_voices.voter_id == user_id))
        return result.scalars().first()

    async def add_vote(self, vote_data: dict):
        check = await self._check_user_vote(vote_data.get("discussion_id"), vote_data.get("voter_id"))
        if not check:
            vote = Discussion_voices(**vote_data)
            self.session.add(vote)
            await self.session.commit()
            return vote
        return None

    # async def get_voting(self, discussion_id):
    #     info = await self.session.execute(select(
    #         Discussions.title,
    #         Discussions.text,
    #         Discussions.type,
    #         func.count(Discussion_voices.voter_id).label('user_count')
    #     ).join(Discussion_voices).where(Discussions.id == discussion_id).group_by(Discussions.id))
    #     voting = await self.session.execute(select(Discussion_voices, func.count(Discussion_voices))
    #                                         .where(Discussion_voices.discussion_id == discussion_id,
    #                                                Discussion_voices.vote == True))
    #     full_info = info.first()
    #     true_vote = voting.scalars().first()
    #     false_vote = full_info[-1] - true_vote
    #     result = full_info.extend([true_vote, false_vote])
    #     return result
