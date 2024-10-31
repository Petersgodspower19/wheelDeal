import React from 'react'
import { PiSteeringWheelBold } from "react-icons/pi";
import Links from './Links';

function Footer() {
  return (
    <footer className='flex mt-10 text-white w-full gap-3 items-start justify-between flex-col md:flex-row bg-secondary p-[25px]'>
      <div className="flex  gap-1 w-[250px] flex-col">
      <div className="flex items-center gap-3">
        <PiSteeringWheelBold color="#FF7A00" size={32} />
        <h1 className="text-white font-bold text-[20px]">WheelsDeal</h1>
      </div>
      <p className='text-[15px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea soluta. Quia ut error suscipit deleniti veniam quod esse nulla nesciunt praesentium amet, sunt voluptatibus culpa temporibus vitae minima asperiores?
      </p>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='font-bold text-2xl'>Pages</h1>
        <Links to="about">About</Links>
        <Links to="cars">Our Cars</Links>
        <Links to="service">Services</Links>
      </div>
      <div className='flex flex-col gap-3'>
      <h1 className='font-bold text-2xl'>Brands</h1>
      <p>Toyota</p>
      <p>Ford</p>
      <p>Hyundai</p>
      <p>Hundai</p>
      <p>Mercedes</p>
      </div>
    </footer>
  )
}

export default Footer
