import {defineType} from 'sanity'

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
      name: 'progress',
      title: 'Progess',
      validation: (Rule) => Rule.min(0).max(100)
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