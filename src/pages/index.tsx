import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Container from '~/components/Container'
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
    <Container>
      <section>
        {properties.length ? (
          properties.map((property) => <Card key={property._id} property={property} />)
        ) : (
          <Welcome />
        )}
      </section>
    </Container>
  )
}
