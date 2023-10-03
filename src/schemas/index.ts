import { SchemaTypeDefinition } from 'sanity'

import agent from './agent'
import blockContent from './blockContent'
import post from './post'
import property from './property'


export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [agent, post, property, blockContent],
}
