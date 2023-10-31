import Image from "next/image"
import React, { useState } from "react";

import { urlForImage } from "~/lib/sanity.image";
import type { Property } from "~/lib/sanity.queries";
const ListingPhotos = (property: Property) => {
 
  const propertyPhotos = [property.mainImage, ...property.imageGallery.images]
  const [currentPhoto, setCurrentPhoto] = useState(0)
  return (
    <div className="flex gap-5 flex-col">
      <div className="relative w-[70vw] sm:w-full h-[40vh] sm:h-[60vh]">
        {/* {JSON.stringify(property.imageGallery, null, 2)} */}
        <Image alt="listing" fill src={urlForImage(propertyPhotos[currentPhoto]).url()}/>
      </div>
{propertyPhotos.length > 1 && (
  <ul className="flex gap-5 flex-wrap">
  {propertyPhotos.map((photo, index) => (
    <li key={index} className="relative w-48 h-32 cursor-pointer" onClick={() => setCurrentPhoto(index)}>
<Image src={urlForImage(photo).url()} alt="listing" fill/>
    </li>
  ))}
  </ul>
)}
    </div>
  )
}

export default ListingPhotos;