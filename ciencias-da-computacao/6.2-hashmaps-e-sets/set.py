class Set:
    def __init__(self) -> None:
        self.set = [False for i in range(1001)]
        self.last_item = 0

    def add(self, item):
        self.set[item] = True
        if item > self.last_item:
            self.last_item = item

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
