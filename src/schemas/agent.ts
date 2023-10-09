import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'agent',
  title: 'Agent',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'mlsId',
      title: 'MLS Id',
      type: 'string',
    }),
    defineField({
      name: 'telephone',
      title: 'Contact Phone Number',
      type: 'string',
//       validation: Rule => Rule.custom(telephone => {
// if (typeof telephone === 'undefined'){
//   return true
// }
//         return telephone.match( ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$ )
//         ?
//         true
//         : 'Invalid telephone number'
//       })
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.custom(email => {
          if (typeof email === 'undefined') {
              return true // Allow undefined values
          }
          
          return email.toLowerCase()
              .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
                
              ? true
              : 'Invalid email address'
        })
    }),
    defineField({
      name: 'socials',
      title: 'Social Media Accounts',
      type: 'array',
      of: [defineArrayMember({ type: 'social' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
