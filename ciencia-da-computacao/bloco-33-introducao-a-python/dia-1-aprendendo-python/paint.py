import math

can_qtd = 18
price = 80


def paint(can_qtd, price, wall_size):
    qtd = (wall_size / 3) // can_qtd
    if qtd % 18:
        qtd += 1
    price = qtd * price
    return (qtd, price)


print((paint(can_qtd, price, 160)))


# course:
def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_costs(160))


def paint_costs2(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(paint_costs2(160))
