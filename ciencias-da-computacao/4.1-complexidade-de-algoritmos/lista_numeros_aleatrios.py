import random


def averages_list(n):
    list_of_averages = []
    for i in range(100):
        average = 0
        for i in range(n):
            average += random.randrange(1, n)
            list_of_averages.append(average)

    return list_of_averages


print(averages_list(9))
# print(random.randrange(3, 9))
# returns a number between 3 (included) and 9 (not included)
