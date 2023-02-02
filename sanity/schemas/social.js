import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
        {
            name: "title",
            title: 'title',
            description: "Name of social",
            type: "string"
          },
          {
            name: 'url',
            title: 'Url',
            type: 'url'
          },
  ]

})