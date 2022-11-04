import requests

response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)
assert "bot detected" not in response.text

# Para verificar se a requisição foi bem sucedida, faça assert "bot detected" not in response.text. Se nada acontecer, seu código está funcionando. ⚠️ Faça a inspeção de como a requisição é feita pelo navegador para conseguir replicar através do código. # noqa
