def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


print(mdc(252, 105))
