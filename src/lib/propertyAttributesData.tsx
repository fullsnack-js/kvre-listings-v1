import React from "react";
import {BiArea,BiBed, BiSolidArrowToBottom, BiSolidCarGarage, BiSolidParking} from 'react-icons/bi'
import {BsHouseCheckFill} from 'react-icons/bs'
import {FaBath, FaRulerCombined} from 'react-icons/fa6'
import {MdAttachMoney,MdOutdoorGrill, MdOutlineHeatPump, MdOutlineYard, MdPool} from 'react-icons/md'
import {TbAirConditioning} from 'react-icons/tb'
export const PropertyAttributesType = [
  {type: 'basic',
data: [
  {name:'bedrooms', svgPath: <BiBed/>},
  {name:'bathrooms', svgPath: <FaBath/>},
  {name:'price', svgPath: <MdAttachMoney/>},
  {name:'sqFt', svgPath: <FaRulerCombined/>},
  {name:'lotSize', svgPath: <BiArea/>},
]},
  {type: 'details',
data:[
  {name:'pool', svgPath: <MdPool/>},
  {name:'driveway', svgPath: <BiSolidParking/>},
  {name:'garage', svgPath: <BiSolidCarGarage/>},
  {name:'ac', svgPath: <TbAirConditioning/>},
  {name:'heating', svgPath: < MdOutlineHeatPump/>},
  {name:'basement', svgPath: <BiSolidArrowToBottom/>},
  {name:'backyard',svgPath: <MdOutlineYard/>},
  {name:'patio',svgPath: <MdOutdoorGrill/>},
  {name:'hoa', svgPath: <BsHouseCheckFill/>},
]
}
]