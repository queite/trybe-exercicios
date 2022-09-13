def sum_n(n):
    sum = 0
    for item in range(1, n + 1):
        sum += item
    return sum


print(sum_n(5))


# course:
def summation(limit):
    return sum(range(1, limit + 1))
