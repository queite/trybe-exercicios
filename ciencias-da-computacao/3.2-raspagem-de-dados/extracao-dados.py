import requests
from parsel import Selector

response = requests.get(
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
)
selector = Selector(text=response.text)
# print(selector)

title = selector.css("h1::text").get()
price = selector.css(".price_color::text").re_first(r"\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
url = "http://books.toscrape.com/" + selector.css(".item img::attr(src)").get()
qtd = selector.css(".instock").re_first(r"\d")
# print(qtd)
print(title, price, description, url, qtd, sep=",")
