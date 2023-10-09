import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const propertiesQuery = groq`*[_type == "property" && defined(slug.current)] | order(_createdAt desc)`

export async function getProperties(client: SanityClient): Promise<Property[]> {
  return await client.fetch(propertiesQuery)
}

export const propertyBySlugQuery = groq`*[_type == "property" && slug.current == $slug][0]{
  ...,
  agent->
}`

export async function getProperty(
  client: SanityClient,
  slug: string,
): Promise<Property> {
  return await client.fetch(propertyBySlugQuery, {
    slug,
  })
}

export const propertySlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Property {
  _type: 'property'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
  agent: Agent
}

export interface Agent {
  _id: string
  _createdAt: string
  title: string
  firstName?: string
  lastName?: string
  mlsId: string
  telephone: string
  email: string
  slug: string
  description: string
  mainImage?: ImageAsset
}
