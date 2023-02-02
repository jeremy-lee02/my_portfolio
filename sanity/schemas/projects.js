import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
        {
            name: "projectName",
            title: 'Project Name',
            type: "string"
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string'
          },
          {
            name: "skillImage",
            title: "Skill Image",
            type: "image",
            options:{
              hotspot: true
            }
          },
          {
            name:"url",
            title: "Github Link",
            type: "string"
          }
  ]

})