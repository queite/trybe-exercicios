nome = input('Digite um nome: ')

length = len(nome) - 1

for index in range(len(nome)):  # estabelece a quantidade de repetições/linhas
    for letra in range(len(nome) - index): # estabelece qtd repetições retirando uma de cada vez(index do primeiro range) # noqa
        # imprime uma letra por vez até o limite estabelecido no for (retirando as últimas letras cfe necessário) # noqa
        print(nome[letra], end='')
        # print imprime uma letra em cada linha ao colocar o end='' troca a quebra de linha por nada # noqa
    print()  # imprime linha vazia / é esse print que vai fazer a quebra de linha já que o primeiro deixa de fazer # noqa

# course
# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()

# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)
