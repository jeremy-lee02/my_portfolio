import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "nickName",
      title: "Nickname",
      type: "string"
    },
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options:{
        hotspot: true
      }
    },
    {
      name: "backgroundInfo",
      title: "Background Info",
      type: "string"
    },
    {
      name: "profileImg",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot:true
      }
    },
    {
      name: "phone",
      title: "Phone",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "social",
      title: "Social",
      type: "array",
      of: [{type: "reference", to: {type: "social"}}]
    },
  ],
})
