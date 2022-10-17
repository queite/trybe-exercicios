from log_handler import LogHandler


class ScreenLog(LogHandler):
    @classmethod
    def log(cls, msg):
        print(msg)
