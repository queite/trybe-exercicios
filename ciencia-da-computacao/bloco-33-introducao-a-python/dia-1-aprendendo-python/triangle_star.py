def triangle(number):
    for row in range(number + 1):
        print(row * "*")


triangle(5)
# Python sabe multiplicar sequências!
# Por exemplo, 3 * 'bla' resulta em blablabla.
# Isso se aplica a listas também, caso você precise.


# course
def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * "*")
