from log_handler import LogHandler


class FileLog(LogHandler):
    @classmethod
    def log(cls, msg):
        with open('log.txt', 'a') as log_file:
            print(msg, file=log_file)
