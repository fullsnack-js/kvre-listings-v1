export default function PropertyAmenities() {
  // function getSvgPathByName(name) {
  //   for (const amenity of AmenitiesType){
  //     for (const data of amenity.data){
  //       if (data.name === name){
  //         return data.svgPath;
  //       }
  //     }
  //   }
  // }
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xl font-semibold">Property Amenities</h4>
      <ul className="grid grid-cols-5 gap-2">
        <li className="border border-gray-300 p-3 rounded-lg flex flex-col justify-start items-start" key={'x'}>
  {/* {getSvgPathByName(amenity)} */}
  <span>{'amenity'}</span>
        </li>
      </ul>
      </div>
  )
}