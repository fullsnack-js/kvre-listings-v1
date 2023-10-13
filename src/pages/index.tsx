import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
import PropertyCard from '~/components/PropertyCard'
import Card, {TwCard} from '~/components/PropertyCard'
import Welcome from '~/components/Welcome'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getProperties, propertiesQuery,type Property } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    properties: Property[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const properties = await getProperties(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      properties,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [properties] = useLiveQuery<Property[]>(props.properties, propertiesQuery)
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property}/>
        ))}
      </div>
    </div>
    // <Container>
    //   <section>
    //     {properties.length ? (
    //       properties.map((property) => <Card key={property._id} property={property} />)
    //     ) : (
    //       <Welcome />
    //     )}
    //   </section>
    // </Container>
  )
}
