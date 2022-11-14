def max_integer(list, len):
    if len == 1:
        return list[0]
    else:
        maior = max_integer(list, len - 1)
        if maior > list[len - 1]:
            return maior
        return list[len - 1]


print(max_integer([150, 25, 100, 5, 18], 5))
