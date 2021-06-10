import contentful_management

def createEntry(client, space, environment, article, publication):
   entry_attributes = {
      "content_type_id": "article_component",
         "fields": {
            "title": {
               "en-US": article["title"]
            },
            "subtitle": {
               "en-US": article["subtitle"]
            },
            "author": {
               "en-US": article["author"]
            },
            "date": {
               "en-US": article["date"]
            },
            "url": {
               "en-US": article["article_url"]
            },
            'thumbnail': {
               'en-US': {
                  "sys": {
                     "id": f'asset_{article["article_id"]}',
                     "linkType": "Asset",
                     "type": "Link",
                  }
               }
            },
            "publication": {
               "en-US": publication
            },

         }
   }
   try:
      entry = environment.entries().create(
         f'entry_{article["article_id"]}',
         entry_attributes
      )
      entry.publish()
   except contentful_management.errors.VersionMismatchError:
      print('already exists')
      return