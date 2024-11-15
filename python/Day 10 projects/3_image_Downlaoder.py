import requests

def DownlaodFile(url , name):
    responce = requests.get(url)
    open(f"pic{name}.jpg", "wb").write(responce.content)


url = "https://picsum.photos/400/700"
for i in range(3):
    DownlaodFile(url , i)