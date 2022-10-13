import json
import csv


def read_file(file):
    with open(file) as library:
        books = json.load(library)
    return books


def group_by_category(books_array):
    total_books = len(books_array)
    categories = {}
    for book in books_array:
        for category in (book["categories"]):
            if categories.get(category.capitalize()):
                categories[category.capitalize()] += 1
            else:
                categories[category.capitalize()] = 1
    return total_books, categories


def createCSVFile(total_books, categories):
    with open('categories_percentage.csv', 'w', encoding="utf-8") as file:
        write = csv.writer(file)

        headers = ['categoria', 'porcentagem']
        write.writerow(headers)

        for category, qtd in categories.items():
            row = [
                category,
                qtd/total_books,
            ]
            if row[0]:  # remove itens vazios
                write.writerow(row)


if __name__ == "__main__":
    books_array = read_file('biblioteca.json')
    total_books, categories = group_by_category(books_array)
    createCSVFile(total_books, categories)
