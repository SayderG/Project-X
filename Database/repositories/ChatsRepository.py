from Database.models.chats import Chats
from Database.repositories.BaseRepository import BaseRepository


class ChatsRepository(BaseRepository):
    model = Chats

