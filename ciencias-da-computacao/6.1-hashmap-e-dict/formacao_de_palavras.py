# words = ["cat", "bt", "hat", "tree"], chars = "atach"
# saída: 6
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "cat" (tamanho 3) e "hat" (tamanho 3)."""


def create_hashing(string: str):
    hash = {}
    for char in string:
        if char in hash:
            hash[char] += 1
        else:
            hash[char] = 1

    return hash


def find_match_characters(string: str, words: list):
    string_hashmap = create_hashing(string)
    result = []
    length = 0

    for word in words:
        word_hashmap = create_hashing(word)
        word_in_string_hashmap = True
        for char in word_hashmap:
            if char not in string_hashmap:
                word_in_string_hashmap = False
                break
            elif word_hashmap[char] > string_hashmap[char]:
                word_in_string_hashmap = False
                break
        if word_in_string_hashmap:
            result.append(word)
            length += len(word)
    return (
        "Palavras que podem ser formadas com os caracteres da string "
        f'"{string}": {result} com um tamanho total de {length}.'
    )


print(find_match_characters("atach", ["cat", "bt", "hat", "tree"]))
print(find_match_characters("welldonehoneyr", ["hello", "world", "students"]))
