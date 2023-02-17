import asyncio
from aiogram import Dispatcher
from aiogram.types import Message
from Database.repositories.UserRepository import UsersRepository

async def new_user_message(message: Message):
    for i in range(3):
        await message.answer(f"Сообщение {i}")
        await asyncio.sleep(0.3)

async def main_message(message: Message):
    await message.answer("Главное меню + изображение")

# /start handler
async def start_message(message: Message):
    users = UsersRepository(message.bot.get('session')())
    if await users.by_id(message.from_user.id):
        await main_message(message)
    else:
        await new_user_message(message)
        user = message.from_user
        await users.create_from_bot({"account_id": user.id, "username": user.username, "first_name": user.first_name})

def register_user(dp: Dispatcher):
    dp.register_message_handler(start_message, commands=["start"], state="*")
