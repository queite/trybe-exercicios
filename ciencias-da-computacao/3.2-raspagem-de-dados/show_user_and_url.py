import requests

response = requests.get("https://api.github.com/users")


for item in response.json():
    print(f"{item['login']} {item['url']}")
