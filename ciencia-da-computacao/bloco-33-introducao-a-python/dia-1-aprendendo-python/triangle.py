def is_triangle(side_1, side_2, side_3):
    is_triangle = (
        side_1 + side_2 > side_3
        and side_2 + side_3 > side_1
        and side_3 + side_1 > side_2
    )
    if not is_triangle:
        print("not a triangle")
    elif side_1 == side_2 == side_3:
        print("Triângulo Equilátero")
    elif side_1 == side_2 or side_2 == side_3 or side_3 == side_1:
        print("Triângulo Isósceles")
    else:
        print("Triângulo Escaleno")


is_triangle(15, 10, 15)
