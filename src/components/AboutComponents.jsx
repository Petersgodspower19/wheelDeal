import React from 'react'
import { FaUsers } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import AboutCard from './AboutCard';

function AboutComponents() {
  return (
    <div className="w-full mt-14 mb-14 p-[10px]">
      <div className="text-center mb-8">
        <h1 className="font-bold text-4xl">
        Why  Choose<span className="text-primary"> WheelsDeal</span>?
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, laborum!</p>
      </div>
      <div className='flex items-center gap-3 flex-wrap justify-center'>
       <AboutCard  url={<GrMoney color='green' size={50} className='text-center  m-auto' />}  heading="Financing  Options" />
      <AboutCard  url={<FaUsers color='green' size={59}  className='text-center  m-auto'/>}
      heading="Satisfied Customers" />
       <AboutCard  url={<TbTruckDelivery color='green' size={59}  className='text-center  m-auto'/>}
      heading="Fast and Easy Delivery" />
      </div>
    </div>
  )
}

export default AboutComponents
