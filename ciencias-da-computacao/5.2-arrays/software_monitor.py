# 1 - OK
# 0 - Instabilidades


def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time


# O(n) - tempo
# O1  - espaço
valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

print(verify_max_time_ok(valores_coletados2))
