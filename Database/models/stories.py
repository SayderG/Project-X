from sqlalchemy import Column, Integer, ForeignKey, String, Boolean, ARRAY
from sqlalchemy.orm import relationship
from Database.base import Base


class Stories(Base):
    __tablename__ = 'Stories'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    image = Column(String)
    status = Column(String)
    content = Column(String)
    viewed = Column(ARRAY(Integer), default=[])
    liked = Column(ARRAY(Integer), default=[])
