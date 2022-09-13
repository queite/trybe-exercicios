name = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_len(list):
    biggest = list[0]
    for string in list:
        if len(biggest) < len(string):
            biggest = string
    return biggest


print((biggest_len(name)))
