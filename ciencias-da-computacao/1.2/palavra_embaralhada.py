import random
from random import sample
import json  # json é um modulo que vem embutido, porém precisamos importá-lo

# palavras = ['carro', 'lista', 'manobra', 'portão']


with open("palavras.json") as file:
    palavras = json.load(file)["palavras"]

palavra_da_vez = random.choice(palavras)
palavra_embaralhada = "".join(sample(palavra_da_vez, len(palavra_da_vez)))
print(palavra_embaralhada)

chances = 0
while chances < 3:
    palavra_digitada = input("Advinhe a palavra: ")
    if palavra_da_vez == palavra_digitada:
        print(f'Você acertou a palavra era: {palavra_da_vez}')
        break
    chances += 1

if chances == 3:
    print(f'Você errou a palavra era: {palavra_da_vez}')
