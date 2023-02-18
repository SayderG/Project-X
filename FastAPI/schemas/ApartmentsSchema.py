from pydantic import BaseModel, validator


# House Schema
class House(BaseModel):
    address: str
    complex: str
    liter: str


class HouseIn(House):
    pass


class HouseOut(House):
    id: int

    class Config:
        orm_mode = True


# Apartment Schema
class Apartments(BaseModel):
    house_id: int
    porch: int
    floor: int
    number: int
    rooms: int
    area: int
    price: int
    status: str

    @validator('status')
    def status_must_be(cls, v):
        if v not in ['free', 'sold', 'rented']:
            raise ValueError('status must be free, sold or rented')
        return v

    @validator('price')
    def price_must_be_positive(cls, v):
        if v <= 0:
            raise ValueError('price must be positive')
        return v

    @validator('porch')
    def porch_must_be_positive(cls, v):
        if v <= 0 or v > 5:
            raise ValueError('porch is in the range 0-5')
        return v

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
            raise ValueError('area within 100 m')
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

# Owner Schema

class ApartmentsOwner(BaseModel):
    apartment_id: int
    owner_id: int

class ApartmentsOwnerIn(ApartmentsOwner):
    pass
class ApartmentsOwnerOut(ApartmentsOwner):
    id: int

    class Config:
        orm_mode = True

