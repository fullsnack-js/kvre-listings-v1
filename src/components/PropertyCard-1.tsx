import Image from 'next/image'

import { urlForImage } from '~/lib/sanity.image'
import { type Property } from '~/lib/sanity.queries'
import { formatDate, formatPrice } from '~/utils'

export default function Card({ property }: { property: Property }) {
  console.log(property.address['street'])
  const {bedrooms, bathrooms,lotSize,houseSqft,price,propertyType} = property.propertyAttributes
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
        <p className="font-bold text-2xl">{formatPrice(price)}</p>
        <p className="card__date">{formatDate(property._createdAt)}</p>
      </div>
    </div>
  )
}


export function TwCard({property}: {property: Property}) {
  const {bedrooms, bathrooms,lotSize,houseSqft,price,propertyType} = property.propertyAttributes
  return (
    <article key={property._id} className="flex flex-col items-start justify-between">
    <div className="relative w-full">
      <div
        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
      >
         <Image
        
          src={urlForImage(property.mainImage).url()}
          height={300}
          width={500}
          alt=""
        />
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div className="max-w-xl">
      <div className="mt-8 flex items-center gap-x-4 text-xl">
        <div className="text-gray-500">
        {formatPrice(price)}
        </div>
        <div
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {property.address.street}
        </div>
      </div>
      </div>
      <div className="group relative">
        {/* <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={property.href}>
            <span className="absolute inset-0" />
            {property.title}
          </a>
        </h3> */}
        <p className="mt-5 line-clamp-3 text-lg leading-6 text-gray-600">{`${bedrooms} bed ${bathrooms} bath`}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        {/* <img src={urlForImage(property.agent.mainImage).url()} alt="" className="h-10 w-10 rounded-full bg-gray-100" /> */}
        <div className="text-sm leading-6">
          {/* <p className="font-semibold text-gray-900">
            <a href='/'}>
              <span className="absolute inset-0" />
              {property.agent.name}
            </a>
          </p> */}
          {/* <p className="text-gray-600">{property.author.role}</p> */}
        </div>
      </div>
  </article>
  )
}