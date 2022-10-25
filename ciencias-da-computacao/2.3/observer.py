from abc import ABC, abstractmethod


class Alarm:
    def __init__(self):
        self.routines = (
            []
        )  # recebe as rotinas que devem ser diparadas com o alarme

    def trigger_all(self):
        for routine in self.routines:  # dispara todas as rotinas do alarme
            routine.trigger()

    def addRoutine(self, routine):
        self.routines.append(routine)

    def ring(self):
        print("Triiiim triiiim triiiim")
        self.trigger_all()


# Interface Observer
class Trigger(ABC):
    @abstractmethod
    def trigger(self):
        pass


# Observadores de rotinas
class TurnLightsOn(Trigger):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.addRoutine(
            self
        )  # ao ser criado objeto TurnLightsOn se adiciona como rotina ao alarme que é recebido como parametro  # noqa

    def trigger(self):
        print("Ligando luzes")


class TurnCoffeMachineOn(Trigger):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.addRoutine(self)

    def trigger(self):
        print("Coffe machine working")


alarm = Alarm()  # instancia alarme
turnLightsOn = TurnLightsOn(
    alarm
)  # instancia a rotina que recebe o alarme como parâmento.
turnCoffeMachineOn = TurnCoffeMachineOn(alarm)
alarm.ring()  # alarme desperta e dispara todas as rotinas
