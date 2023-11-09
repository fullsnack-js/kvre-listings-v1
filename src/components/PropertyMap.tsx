import { useMemo } from "react"
import {Map, Marker} from "react-map-gl"

import { Property } from "~/lib/sanity.queries"

export default function PropertyMap(property:Property) {
  // const pins = useMemo(() => {
  //   return (
  //     <Marker longitude={72.5714} latitude={23.0225}>
  //       {/* <Pin/> */}
  //     </Marker>
  //   )
  // }, [property])
  return (
    <div className="h-96 w-full">
      <Map
      initialViewState={{
        longitude: 72.5714,
        latitude: 23.0225,
        zoom: 11
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      scrollZoom={false}
      dragPan={false}
      dragRotate={false}
      doubleClickZoom={false}>
       <Marker longitude={72.5714} latitude={23.0225}>
        {/* <Pin/> */}
      </Marker>
      </Map>
      </div>
  )
}