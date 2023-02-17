import asyncio
import logging

from aiogram import Bot, Dispatcher
from aiogram.contrib.fsm_storage.redis import RedisStorage2
from Bot.config import load_config
from Bot.handlers.starting import register_user
from Bot.middlewares.environment import EnvironmentMiddleware
from Bot.filters.admin import AdminFilter
from Database.base import AsyncDatabase

logger = logging.getLogger(__name__)

def register_all_middlewares(dp, config):
    dp.setup_middleware(EnvironmentMiddleware(config=config))


def register_all_filters(dp):
    dp.filters_factory.bind(AdminFilter)


def register_all_handlers(dp):
    register_user(dp)


async def main():
    logging.basicConfig(
        level=logging.INFO,
        format=u'%(filename)s:%(lineno)d #%(levelname)-8s [%(asctime)s] - %(name)s - %(message)s',
    )
    logger.info("Starting bot")
    config = load_config(".env")

    storage = RedisStorage2(host=config.redis.host)
    bot = Bot(token=config.tg_bot.token, parse_mode='HTML')
    dp = Dispatcher(bot, storage=storage)
    bot['session'] = await AsyncDatabase.get_session_maker()
    bot['config'] = config

    register_all_middlewares(dp, config)
    register_all_filters(dp)
    register_all_handlers(dp)

    # start
    try:
        await dp.start_polling()
        await AsyncDatabase.create_db()
    finally:
        await dp.storage.close()
        await dp.storage.wait_closed()
        await (await bot.get_session()).close()


if __name__ == '__main__':
    try:
        asyncio.run(main())
    except (KeyboardInterrupt, SystemExit):
        logger.error("Bot stopped!")
