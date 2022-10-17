from abc import ABC, abstractmethod


class LogHandler(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError
