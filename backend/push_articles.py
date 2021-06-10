from create_entry import createEntry
from create_asset import createAsset
import contentful_management
import json

SPACE_ID = 'zz9kiu500yrs'
ACCESS_TOKEN = 'CFPAT-dGEDheXTJ8L6GSZaxax9NyOif_VX7TWg1Fj4IX1xB7E'
ENVIRONMENT_ID = 'master'

client = contentful_management.Client(ACCESS_TOKEN)
space = client.spaces().find(SPACE_ID)
environment = space.environments().find(ENVIRONMENT_ID)


print('\n')
with open('data.txt', 'r') as f:
   data = json.load(f)
   for p, articles in data.items():
      for a in articles:
         # print(a)
         print(f'{a["title"]},  {a["article_id"]}')
         createAsset(client, space, environment, a)
         createEntry(client, space, environment, a, p)