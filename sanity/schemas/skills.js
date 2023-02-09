import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
        {
            name: "skillName",
            title: 'Skill Name',
            description: "Name of skill",
            type: "string"
        },
          {
            name: "skillImage",
            title: "Skill Image",
            type: "image",
            options:{
              hotspot: true
            }
          },

  ]

})