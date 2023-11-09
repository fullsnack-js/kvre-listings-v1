import { PortableText } from '@portabletext/react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { useLiveQuery } from 'next-sanity/preview'

import ContactBox from '~/components/Contact'
import Container from '~/components/Container'
import ListingPhotos from '~/components/ListingPhotos'
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
import PropertyAmenities from '~/components/PropertyAmenities'
import PropertyMap from '~/components/PropertyMap'

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
export default function PropertySlugRoute(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [property] = useLiveQuery(props.property, propertyBySlugQuery, {
    slug: props.property.slug.current,
  })

  return (
    <div>
      <div>
        {/* <Navbar /> */}
        <div className='px-20 pt-10 text-black sm:grid sm:gap-10' style={{ gridTemplateColumns: "70fr 30fr" }}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-5xl">{property.title}</h2>
              <span className="text-lg cursor-pointer underline">{property.address.neighborhood}</span>
            </div>
<ListingPhotos {...property}/>

<div className="flex flex-col gap-5">
  <div className="flex flex-col gap-3">
    <h3 className="text-2xl font-semibold">
location type + listed by
    </h3>
    <ul className="flex gap-5">
      <li className='border border-gray-300 p-3 rounded-lg flex flex-col justify-start items-start w-32' key={'x'}><span className='text-2xl font-semibold'>#count</span> <span className="capitalize">feature</span></li>
    </ul>
    <p>description</p>
    <PropertyAmenities/>
    <PropertyMap/>
  </div>
</div>
</div>
<div>
  <ContactBox/>
</div>
          </div>
        </div>
      </div>

  )
}
export function ProjectSlugR(
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
