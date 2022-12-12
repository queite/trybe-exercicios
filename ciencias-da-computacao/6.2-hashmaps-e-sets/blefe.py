def blefe(play1, play2):
    play1_set = set(play1)
    play2_set = set(play2)
    # cria duas sets, e como precisa percorrer as listas para criar os conjuntos, sua Complexidade de Tempo é O(len(s) + len(t)). # noqa

    play1_dif = list(play1_set.difference(play2))  # O(len(s)) Difference s-t
    play2_dif = list(play2_set.difference(play1))  # O(len(s)) Difference s-t
    # Construction  | list(...)    | O(len(...))   | depends on length of ... iterable # noqa

    play1_points = max(play1_dif) - min(play1_dif)  # O(n)
    play2_points = max(play2_dif) - min(play2_dif)  # O(n)

    if play1_points > play2_points:
        return f"Play 1 win with {play1_points} poinst"
    else:
        return f"Play 2 win with {play2_points} points"


# https://wiki.python.org/moin/TimeComplexity
# https://www.ics.uci.edu/~pattis/ICS-33/lectures/complexitypython.txt
# O(n)

if __name__ == "__main__":
    clara = [0, 1, 5, 9, 10]
    # nota de partida: 5
    # redutor: 1
    # pt: 4

    marco = [0, 2, 8, 9, 10]
    # nota de partida: 8
    # redutor: 2
    # pt individual: 6

    # Quem ganhou: Marco
    print(blefe(clara, marco))
    print(blefe([6, 7, 2, 4, 10], [5, 6, 2, 8, 9]))
