from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware
from FastAPI.endpoints import users, services, complaints, apartments, discussions, voting, stories
from Database.base import AsyncDatabase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(users.router, tags=['Users'], prefix='/users')
app.include_router(services.router, tags=['Services'], prefix='/services')
app.include_router(complaints.router, tags=['Complaints'], prefix='/complaints')
app.include_router(apartments.router, tags=['Apartments'], prefix='/apartments')
app.include_router(discussions.router, tags=['Discussions'], prefix='/discussions')
app.include_router(voting.router, tags=['Voting'], prefix='/vote')
app.include_router(stories.router, tags=['Stories'], prefix='/stories')


@app.get('/', name='Root')
async def api_root():
    return "This is root API, documentation is available at /docs or /redoc"


@app.get("/db", name="Create database")
async def create_db():
    await AsyncDatabase.create_db()
    return "Database created"


if __name__ == '__main__':
    uvicorn.run("API:app", host='127.0.0.1', reload=True)
