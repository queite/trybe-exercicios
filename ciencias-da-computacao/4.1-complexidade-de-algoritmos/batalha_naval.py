grid = [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]]

# resultado para (0, 4) = True
# resultado para (1, 1) = False

""" Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada em seu cálculo."""  # noqa


def battleship(grid, line, column):
    if grid[line][column] == 1:
        return True

    return False


print(battleship(grid, 0, 4))
print(battleship(grid, 1, 2))
