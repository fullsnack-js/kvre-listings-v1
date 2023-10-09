import { SchemaTypeDefinition } from 'sanity'

import agent from './agent'
import blockContent from './blockContent'
import gallery from './gallery'
import post from './post'
import property from './property'
import social from './social'

export const schemaTypes = [post, gallery, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [agent, post, gallery, social,property, blockContent],
}
