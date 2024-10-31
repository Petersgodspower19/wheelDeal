import React, { useState } from 'react';
import { PiSteeringWheelBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import Links from './Links';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(state => !state);
  };
  const closeBar = () => {
    setMenu(false)
  }

  return (
    <div className="w-full flex items-center justify-between bg-secondary fixed z-10 p-[15px]">
      <div className="flex items-center gap-1">
        <PiSteeringWheelBold color="#FF7A00" size={32} />
        <NavLink to="/"><h1 className="text-white font-bold text-[20px]">WheelsDeal</h1></NavLink>
      </div>
      <div className="md:flex items-center gap-3 hidden">
        <Links to="about">About</Links>
        <Links to="cars">Our Cars</Links>
        <Links to="service">Services</Links>
        <button className='border-2 border-primary p-[5px] rounded-[5px] hover:bg-primary text-white'>Sign In</button>
      </div>
      <IoMenu size={32} color="#fff" className="md:hidden" onClick={handleMenu} />
      
      {/* Mobile menu */}
      {menu && (
        <div className="w-full absolute top-[60px] left-0 bg-secondary p-5 flex flex-col items-center gap-3 z-10">
          <Links to="about" onClick={closeBar}>About</Links>
          <Links to="cars" onClick={closeBar}>Our Cars</Links>
          <Links to="service" onClick={closeBar}>Services</Links>
          <button className='border-2 border-primary p-[5px] rounded-[5px] hover:bg-primary w-[120px] text-white'>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default Header;
 