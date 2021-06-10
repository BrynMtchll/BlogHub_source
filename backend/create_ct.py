import contentful_management

SPACE_ID = 'srs5335eyrew'
ACCESS_TOKEN = 'CFPAT-dGEDheXTJ8L6GSZaxax9NyOif_VX7TWg1Fj4IX1xB7E'
ENVIRONMENT_ID = 'master'

client = contentful_management.Client(ACCESS_TOKEN)
space = client.spaces().find(SPACE_ID)
environment = space.environments().find(ENVIRONMENT_ID)

content_type_attributes = {
    'name': 'article Component',
    'description': 'article components previewing medium blogs',
    'fields': [
      {
         "id": "title",
         "name": "title",
         "type": "Symbol",
         "localized": False,
         "required": True,
         "validations": [
         {
            "unique": True
         }
         ],
         "disabled": False,
         "omitted": False
      },
      {
         "id": "subtitle",
         "name": "subtitle",
         "type": "Symbol",
         "localized": False,
         "required": False,
         "validations": [],
         "disabled": False,
         "omitted": False
      },
      {
         "id": "publication",
         "name": "publication",
         "type": "Symbol",
         "localized": False,
         "required": False,
         "validations": [],
         "disabled": False,
         "omitted": False
      },
      {
         "id": "url",
         "name": "url",
         "type": "Symbol",
         "localized": False,
         "required": False,
         "validations": [],
         "disabled": False,
         "omitted": False
      },
      {
         "id": "thumbnail",
         "name": "thumbnail",
         "type": "Link",
         "localized": False,
         "required": False,
         "validations": [],
         "disabled": False,
         "omitted": False,
         "linkType": "Asset"
      },
      {
         "id": "author",
         "name": "author",
         "type": "Symbol",
         "localized": False,
         "required": False,
         "validations": [],
         "disabled": False,
         "omitted": False
      },
      {
         "id": "date",
         "name": "date",
         "type": "Symbol",
         "localized": False,
         "required": False,
         "validations": [],
         "disabled": False,
         "omitted": False
      }
    ]
}

new_content_type = environment.content_types().create(
    'article_component',
    content_type_attributes
)