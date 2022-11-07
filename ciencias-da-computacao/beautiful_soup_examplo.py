import requests
from bs4 import BeautifulSoup

url = "https://pt.wikipedia.org/wiki/Rock_in_Rio"
page = requests.get(url)
# print(type(page))

html_content = page.text

# Cria uma instância do objeto Beautiful Soup e usa o parser de HTML nativo
# do Python
soup = BeautifulSoup(html_content, "html.parser")

URL = "https://pt.wikipedia.org/"


def create_url(url: str, urn: str) -> str:
    """Creates an URL from a URN and a URI

    Parameters
    ----------
    url : str
        Universal Resource Locator
    urn : str
        Universal Resource Name

    Returns
    -------
    str
        Universal Resource Identifier (URL)
    """
    url = url[:-1] if url[-1] == "/" else url
    urn = urn[1:] if urn[0] == "/" else urn
    return f"{url}/{urn}"


def transform_wiki_links(link: str) -> str:
    return link if link[:4] == "http" else create_url(URL, link)


links = [
    transform_wiki_links(anchor["href"])
    for anchor in soup.findAll("a")
    if anchor.get("href") is not None
]
print(links)
