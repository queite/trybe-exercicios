numbers = [1, 3, 6, 10, 5]

print(dir(numbers))

iterator_obj = numbers.__iter__()
# ou
# iterator_obj = iter(numbers)

print(f"iterator_obj: {iterator_obj}")

item1 = iterator_obj.__next__()
# ou
# item1 = next(iterator_obj)
print(item1)

item2 = iterator_obj.__next__()

print(item2)
