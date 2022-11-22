def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


def reverse_recursivo(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]
