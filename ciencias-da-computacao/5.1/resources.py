from subprocess import check_output

# Processador
cpu_information = check_output("lscpu").decode("UTF-8").split("\n")
desired_cpu_information = {
    "model name": "Modelo",
    "cpu(s)": "Cores",
    "cpu mhz": "Velocidade (MHz)",
    "l1d": "Cache L1d",
    "l1i": "Cache L1i",
    "l2": "Cache L2",
    "l3": "Cache L3",
}

for desired_name, desired_description in desired_cpu_information.items():
    for information in cpu_information:
        if information.lower().startswith(desired_name):
            information = information.split("                     ")
            information = information[-1].strip()
            print(f"{desired_description}: {information}")

# Memória
memory_information = [
    information
    for information in check_output(["free", "-m"])
    .decode("UTF-8")
    .split("\n")[1]
    .split(" ")
    if information != ""
]

print(memory_information)
print(
    f"Memória total: {memory_information[1]}MB\n"
    f"Memória utilizada: {memory_information[2]}MB"
)
