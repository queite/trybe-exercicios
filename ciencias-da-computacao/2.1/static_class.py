from collections import Counter


class statistics():

    @classmethod
    def average(cls, numbers_list):
        return sum(numbers_list) / len(numbers_list)

    @classmethod
    def median(cls, numbers_list):
        numbers_list.sort()
        lenght = len(numbers_list)
        index = lenght // 2

        if lenght % 2 == 0:
            return (numbers_list[index - 1] + numbers_list[index]) / 2

        return numbers_list[index]

    @classmethod
    def mode(cls, numbers_list):
        most_common, times = Counter(list(numbers_list)).most_common()[0]
        return most_common


print(statistics.mode([12, 10, 5, 6, 5]))

teste = statistics()
print(teste.median([2, 3, 6]))
