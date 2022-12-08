class Set:
    def __init__(self) -> None:
        self.set = [False for i in range(1001)]
        self.last_item = 0

    def __str__(self):
        result = "{"
        for i, item in enumerate(self.set):
            if item:
                result += str(i)
                if i < self.last_item:
                    result += ","

        result += "}"
        return result

    def __contains__(self, item):
        return self.set[item]

    def add(self, item):
        self.set[item] = True
        if item > self.last_item:
            self.last_item = item

    def union(self, conjuntoB):
        union = Set()
        for i in range(len(self.set)):
            if self.set[i] or conjuntoB.set[i]:
                union.add(i)
        return union

    def intersection(self, conjuntoB):
        intersection = Set()
        for i in range(len(self.set)):
            if self.set[i] and conjuntoB.set[i]:
                intersection.add(i)
        return intersection

    def difference(self, conjuntoB):
        difference = Set()
        for i in range(len(self.set)):
            if self.set[i] and not conjuntoB.set[i]:
                difference.add(i)
        return difference

    def issubset(self, conjuntoB):
        for i in range(len(self.set)):
            if self.set[i] and not conjuntoB.set[i]:
                return False
        return True

    def issuperset(self, conjuntoB):
        for i in range(len(self.set)):
            if conjuntoB.set[i] and not self.set[i]:
                return False
        return True


if __name__ == "__main__":
    new_set = Set()
    for number in [0, 10, 100, 1000]:
        new_set.add(number)
    print(new_set)
    print(1 in new_set)
    print(10 in new_set)

    new_set2 = Set()
    for i in range(1, 11):
        new_set2.add(i)
    print(new_set2)

    new_set3 = Set()
    for i in range(10, 21):
        new_set3.add(i)
    print(new_set3)

    print(new_set2.union(new_set3))
    print(new_set2.intersection(new_set3))
    print(new_set2.difference(new_set3))

    new_set4 = Set()
    for i in range(1, 10):
        new_set4.add(i)

    new_set5 = Set()
    for i in range(1, 6):
        new_set5.add(i)

    print(new_set5.issubset(new_set4))
    print(new_set5.issubset(new_set))

    print(new_set4.issuperset(new_set5))

    estudantes = Set()
    for i in [1, 2, 3, 4, 5, 6, 7]:
        estudantes.add(i)

    lista1_entregues = Set()
    for i in [1, 4, 7, 3]:
        lista1_entregues.add(i)

    lista2_entregues = Set()
    for i in [3, 1, 6]:
        lista2_entregues.add(i)

    # Quem ainda não entregou a lista1?
    print(
        "Quem ainda não entregou a lista1?",
        estudantes.difference(lista1_entregues),
    )

    # Quem já entregou as duas listas?
    print(
        "Quem já entregou as duas listas?",
        lista1_entregues.intersection(lista2_entregues),
    )

    # Quem já entregou qualquer uma das duas listas?
    print(
        "Quem já entregou qualquer uma das duas listas?",
        lista1_entregues.union(lista2_entregues),
    )

    # Quem ainda não entregou nenhuma das listas?
    union = lista1_entregues.union(lista2_entregues)
    print(
        "Quem ainda não entregou nenhuma das listas?",
        estudantes.difference(union),
    )
