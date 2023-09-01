import requests
from url import url

fp = open(file="tunescape.txt",mode="a",encoding="utf-8")
response = requests.get(url=url)
data = response.json()

for i in range(0,len(data)):
    response.raise_for_status()
    fp.write(f"Song - {i} = {data[i]['Title']}")
    fp.write('\n')
    print(f"Song - {i} = {data[i]['Title']}")
    print('\n')
fp.close()


# print(response.status_code)
# print(response.status_code)
