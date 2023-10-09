import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { urlForImage } from '~/lib/sanity.image'
import {
  getProperty,
  type Property,
  propertyBySlugQuery,
  propertySlugsQuery,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import { formatDate } from '~/utils'

interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    property: Property
  },
  Query
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const property = await getProperty(client, params.slug)

  if (!property) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      property,
    },
  }
}

export default function ProjectSlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [property] = useLiveQuery(props.property, propertyBySlugQuery, {
    slug: props.property.slug.current,
  })

  return (
    <Container>
      <section className="property">
        {property.mainImage ? (
          <Image
            className="property__cover"
            src={urlForImage(property.mainImage).url()}
            height={231}
            width={367}
            alt=""
          />
        ) : (
          <div className="property__cover--none" />
        )}
        <div className="property__container">
          <h1 className="property__title">{property.title}</h1>
          <p className="property__excerpt">{property.excerpt}</p>
          <p className="property__date">{formatDate(property._createdAt)}</p>
          <div className="property__content">
            <PortableText value={property.body} />
          </div>
        </div>
      </section>
    </Container>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(propertySlugsQuery)

  return {
    paths: slugs?.map(({ slug }) => `/property/${slug}`) || [],
    fallback: 'blocking',
  }
}
