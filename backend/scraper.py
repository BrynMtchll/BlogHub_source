import requests
from bs4 import BeautifulSoup, Tag
from PIL import Image
import os
import json

DEFAULT_THUMBNAIL = 'https://kravmaganewcastle.com.au/wp-content/uploads/2017/04/default-image.jpg'

# medium publications to pull articles from
urls = {
   'The Coinbase Blog': 'https://blog.coinbase.com/archive',
   'Towards Data Science': 'https://towardsdatascience.com/archive',
   'UX Collective': 'https://uxdesign.cc/archive',
   'The Startup': 'https://medium.com/swlh/archive',
   'The Writing Cooperative': 'https://writingcooperative.com/archive',
   'Data Driven Investor': 'https://medium.com/datadriveninvestor/archive',
   'The Coffeelicious': 'https://medium.com/the-coffeelicious/archive',
   'muzli': 'https://medium.muz.li/archive'
}

data = {
   'The Coinbase Blog': [],
   'Towards Data Science': [],
   'UX Collective': [],
   'The Startup': [],
   'The Writing Cooperative': [],
   'Data Driven Investor': [],
   'The Coffeelicious': [],
   'muzli': []
}

article_id = 0

# download the thumbnail
def get_img(img_url, dest_folder, dest_filename):
   ext = img_url.split('.')[-1]
   if len(ext) > 4:
      ext = 'jpg'
   dest_file = f'{dest_filename}.{ext}'
   path = f'{dest_folder}/{dest_file}'

   with open(path, 'wb') as f:
      f.write(requests.get(img_url, allow_redirects=False).content)
   
   im = Image.open(path)
   os.remove(path)
   im.convert('RGB').save(f'{dest_folder}/{dest_filename}.jpg')
   return dest_file

# get tag contents
def stripTag(field): 
   if field is None or isinstance(field.contents[0], Tag):
      return '' 
   else:
      return field.contents[0]

# main

for publication, url in urls.items():
   print('\n', publication, ' ', url)
   try:
      response = requests.get(url, allow_redirects=True)
   except requests.exceptions.RequestException as e:
      print('yeeeaaa')
      raise SystemError(e)
   
   page = response.content
   soup = BeautifulSoup(page, 'html.parser')
   articles = soup.findAll(
      "div",
      class_="postArticle postArticle--short js-postArticle js-trackPostPresentation js-trackPostScrolls"
   )

   for article in articles:
      title = article.find("h3", class_="graf--title")
      title = stripTag(title)
      if title == '': continue
      article_id += 1

      subtitle = article.find("h4", class_="graf--subtitle")
      subtitle = stripTag(subtitle)
      image = article.find("img", class_="graf-image")

      if image is None:
         print('ye')
         get_img(DEFAULT_THUMBNAIL, 'images', f'{article_id}')

      else:
         get_img(image['src'], 'images', f'{article_id}')

      date = article.find("time")
      date = stripTag(date)

      author = article.find(
         "a", 
         class_="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
      )
      author = stripTag(author)

      article_url = article.find_all("a")[3]['href'].split('?')[0]
      article = {
         'title': title,
         'subtitle': subtitle,
         'author': author,
         'date': date,
         'article_url': article_url,
         'article_id': article_id,
      }
      data[publication].append(article)
      print(title)

with open('data.txt', 'w') as f:
   json.dump(data, f)