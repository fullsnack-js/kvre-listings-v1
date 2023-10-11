import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Property } from '~/lib/sanity.queries'
import { formatDate } from '~/utils'

export default function Card({ property }: { property: Property }) {
  return (
    <div className="card">
      {property.mainImage ? (
        <Image
          className="card__cover"
          src={urlForImage(property.mainImage).width(500).height(300).url()}
          height={300}
          width={500}
          alt=""
        />
      ) : (
        <div className="card__cover--none" />
      )}
      <div className="card__container">
        <h3 className="card__title">
          <a className="card__link" href={`/property/${property.slug.current}`}>
            {property.title}
          </a>
        </h3>
        <p className="card__excerpt">{property.excerpt}</p>
        <p className="card__date">{formatDate(property._createdAt)}</p>
      </div>
    </div>
  )
}

