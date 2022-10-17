from datetime import datetime
from screen_log import ScreenLog


class Log:
    def __init__(self, __handlers):
        self.__handlers = set(__handlers)

    def add_handler(self, handler):
        self.__handlers.add(handler)

    def info(self, msg):
        self.__log('INFO', msg)

    def alert(self, msg):
        self.__log('ALERT', msg)

    def erro(self, msg):
        self.__log('ERRO', msg)

    def DEBUG(self, msg):
        self.__log('DEBUG', msg)

    def __log(self, level, msg):
        for handler in self.__handlers:
            handler.log(self.__format(level, msg))

    def __format(self, level, msg):
        date = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f'[{level} - {date}]: {msg}'


screen_log = ScreenLog()
log = Log([screen_log])
log.DEBUG('Debug: incorrect')
