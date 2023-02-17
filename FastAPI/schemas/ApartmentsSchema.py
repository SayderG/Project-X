from pydantic import BaseModel, validator


# House Schema
class House(BaseModel):
    address: str


class HouseIn(House):
    pass


class HouseOut(House):
    id: int

    class Config:
        orm_mode = True


# Apartment Schema
class Apartments(BaseModel):
    owner_id: int
    house_id: int
    number: int
    floor: int
    area: int
    rooms: int

    @validator('number')
    def number_must_be_positive(cls, v):
        if v <= 0:
            raise ValueError('number must be positive')
        return v

    @validator('floor')
    def floor_must_be_positive(cls, v):
        if v <= 0 or v > 20:
            raise ValueError('floor is in the range 0-20')
        return v

    @validator('area')
    def area_must_be_positive(cls, v):
        if v <= 0 or v > 200:
            raise ValueError('area within 200 m')
        return v

    @validator('rooms')
    def rooms_must_be_positive(cls, v):
        if v <= 0 or v > 5:
            raise ValueError('rooms within 5')
        return v


class ApartmentsOut(Apartments):
    id: int

    class Config:
        orm_mode = True


class ApartmentsIn(Apartments):
    pass
