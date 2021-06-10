import contentful_management

def createAsset(cient, space, environment, article):
   new_upload = space.uploads().create(f'images/{article["article_id"]}.jpg')

   asset_attributes = {
         "content_type_id": "article_component",
         'fields': {
            'title': {
               'en-US': f'image_{article["article_id"]}'
            },
            'file': {
               'en-US': {
                  "fileName": f'{article["article_id"]}.jpg',
                  "contentType": "image/jpg",
                  "uploadFrom": new_upload.to_link().to_json()
               }
            }
         }
      }
   try:
      asset = environment.assets().create(
         f'asset_{article["article_id"]}',
         asset_attributes
      )
      asset.process()
      asset.publish()
   except contentful_management.errors.VersionMismatchError:
      asset = environment.assets().find(f'asset_{article["article_id"]}')