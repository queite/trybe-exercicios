from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)
        # https://pyformat.info/#simple


"""
O __str__ serve para exibir o objeto para usuário final, usada pelo comando print e pela função str
O __repr__ serve para exibir o objeto para o programador, usada pelo console do Python e pela funçao repr.
Ex.:
import datetime
today = datetime.datetime.now()
str(today)
'2012-03-14 09:21:58.130922'
repr(today)
'datetime.datetime(2012, 3, 14, 9, 21, 58, 130922)'
"""  # noqa

# __iter__ = estado que armazena a posição


class IteradorDoBaralho(
    Iterator
):  # Iterator introduz o dunder/magic method __iter__ na classe # noqa
    def __init__(self, cartas):
        self._cartas = cartas
        self._index = 0  # estado que armazena a posição

    # essa linha faz o mesmo que o Iterator:
    # def __iter__(self):
    #     return self

    def __next__(self):  # é isso que efetivamente cria o iterador
        try:
            carta = self._cartas[self._index]
        except IndexError:
            raise StopIteration
        self._index += 1
        return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)

    def __str__(self):
        return f"{self._cartas}"


# baralho = Baralho()
# for carta in baralho:
#     print(carta)


baralho = Baralho()
print(baralho)
# print(dir(Baralho))
