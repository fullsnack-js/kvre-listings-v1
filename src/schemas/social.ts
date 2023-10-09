import { IoShareSocial } from 'react-icons/io5'
import { defineField, defineType, Rule } from 'sanity'

import { getIcon } from '../utils/getIcon'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'object',
  options: {
    columns: 2,
    collapsible: false,
  },
  icon: IoShareSocial,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'WhatsApp', value: 'whatsapp' },
          { title: 'YouTube', value: 'youtube' },
        ],
      },
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      url: 'url',
      type: 'type',
    },
    prepare({ url, type }) {
      return {
        title: type,
        subtitle: url ? url : '(url not set)',
        media: getIcon(type),
      }
    },
  },
})