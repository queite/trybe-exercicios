list = [12, 5, 9, 6, 8, 20]


def average(list):
    sum = 0
    for item in list:
        sum += item
    return sum / len(list)


print(average(list))


# course:
def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


# com function sum
print(sum(list) / len(list))
