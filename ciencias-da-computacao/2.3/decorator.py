ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


# classe de criação de logs
class Log:
    def dispara_log(self, message):
        return message


# classes decoradoras
class LogError:
    def __init__(self, log):  # recebe a classe a ser decorada
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{self.log.dispara_log(message)}{RESET}"  # dispara ação a partir da classe a ser decorada # noqa


class LogWarning:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{self.log.dispara_log(message)}{RESET}"


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{self.log.dispara_log(message)}{RESET}"


log = Log()
print(LogError(log).dispara_log("Error message"))
print(LogWarning(log).dispara_log("Warning message"))
print(LogSuccess(log).dispara_log("Success message"))
