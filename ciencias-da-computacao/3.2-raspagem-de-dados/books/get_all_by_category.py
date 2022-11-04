from pymongo import MongoClient

input_message = "Escolha uma categoria digitando um número:\n "
options = {}

# retorna categorias existentes
with MongoClient() as client:
    db = client.library
    categories = set()

    for book in db.books.find({}):
        if len(book["categories"]) != 0:
            for category in book["categories"]:
                if category != "":
                    categories.add(category)

# Monta opções de categorias
for index, category in enumerate(categories):
    options[index] = category
    input_message += f"{index} - {category}\n"

chosen_category = int(input(input_message))

with MongoClient() as client:
    db = client.library
    print(options[chosen_category])
    books = [
        book
        for book in db.books.find(
            {"categories": options[chosen_category]},
            {"title": 1, "_id": 0},
        )
    ]
    print(books)


# cria conexão
# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
# client = MongoClient()

# acessa o banco
# o banco de dados library será criado se não existir
# db = client.library

# acessa a tabela
# books = db.books

# client.close()  # fecha a conexão com o banco de dados
