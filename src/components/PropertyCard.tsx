import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { urlForImage } from '~/lib/sanity.image';
import { Property } from '~/lib/sanity.queries';
import propertyAttributes from '~/schemas/propertyAttributes';
import { formatPrice } from '~/utils';
 
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
 
export default function PropertyCard({property}: {property: Property}) {
  const [isLoading, setLoading] = useState(true);
  const {bedrooms, bathrooms,lotSize,houseSqft,price,propertyType} = property.propertyAttributes
  console.log({agent:property.agent})
  return (
    <Link href={`/property/${property.slug.current}`} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={urlForImage(property.mainImage).url()}
          layout="fill"
          objectFit="cover"
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className='mt-2 flex items-center justify-between'>
        <p>FOR SALE</p><p className='bg-amber-200 px-2 py-1 rounded-md'>{property.address.neighborhood.toUpperCase()}</p>
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-700">{formatPrice(price)}</h3><p className="mt-5 line-clamp-3 text-lg leading-6 text-gray-600"><span className='font-bold'>{bedrooms}</span> bed<span className='font-bold'> {bathrooms}</span> bath <span className='font-bold'>{houseSqft}</span> sqft</p>
      <p className="mt-1 mb-2 text-lg font-medium text-gray-900">{property.address.street}<br/>
      {property.address.city}, {property.address.state} {property.address.postalCode}
      </p>
      <hr/>
      <div className='mt-2 flex items-center'>
        <div className='rounded-full pr-4'><Image alt=""
          src={urlForImage(property.agent.mainImage).url()}
          // layout="fill"
          width={50}
          height={50}
          objectFit="center"
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out rounded-full',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )} /> </div><div>Agent: {property.agent.title}</div>
      </div>
    </Link>
  );
}
// export default function PropertyListings() {
//   return (
//     <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//       <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//         {/* Images will go here */}
//       </div>
//     </div>
//   );
// }