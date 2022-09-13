def total_price(liters, fuel_type):
    if fuel_type == "G":
        if liters > 20:
            return (liters * 2.5) * 0.94
        else:
            return (liters * 2.5) * 0.96
    if fuel_type == "A":
        if liters > 20:
            return (liters * 1.9) * 0.95
        else:
            return (liters * 1.9) * 0.97
    return liters * fuel_type


print(total_price(25, "G"))
print(total_price(25, "A"))


# course:
def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


print(fuel_price("G", 25))
print(fuel_price("A", 25))
