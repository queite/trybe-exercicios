import requests

# Requisição do tipo GET
response = requests.get("https://httpbin.org/encoding/utf8")

# Conteúdo recebido da requisição
print(response.text)
