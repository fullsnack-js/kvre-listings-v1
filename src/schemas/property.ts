import { defineField, defineType } from 'sanity'

import agentType from "./agent"
import propertyAttributes from './propertyAttributes'

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'agent',
      title: 'Agent',
      type: 'reference',
      to: [{ type: 'agent' }],
    }),
    defineField({
      name: 'address',
      type: 'object',
      title: 'Address',
      // group: 'location',
      options: {
        columns: 2,
      },
      fields: [
        defineField({
          name: 'street',
          type: 'string',
          title: 'Street',
        }),
        defineField({
          name: 'other',
          type: 'string',
          title: 'Other (Floor, suite, etc.)',
        }),
        defineField({
          name: 'city',
          type: 'string',
        }),
        defineField({
          name: 'state',
          type: 'string',
        }),
    defineField({
          name: 'postalCode',
          type: 'string',
          title: 'ZIP/Postal Code',
        }),
        defineField({ name: 'neighborhood', title: 'Neighborhood', type: 'string' }),
      ],
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
      name: 'excerpt',
      title: 'Excerpt',
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
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'gallery'
    }),
    propertyAttributes,
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      agent: 'agent.title',
      media: 'mainImage',
    },
    prepare(selection) {
      const { agent } = selection
      return { ...selection, subtitle: agent && `by ${agent}` }
    },
  },
})
