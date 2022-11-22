from time import sleep

from resources import memory_information

while True:
    print(
        f"Memória total: {memory_information[1]}MB\n"
        f"Memória utilizada: {memory_information[2]}MB"
    )
    sleep(1)
