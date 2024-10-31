import React from 'react'
import hero from "../assets/img/hero.jpg"
import Button from './Button'

function Hero() {
  return (
    <div className='pt-32 flex flex-col md:flex-row items-center justify-around gap-4 bg-black' id='hero'>
       <div className='w-[550px] text-white flex flex-col gap-3 md:p-14 p-8'>
          <h1 className='text-white capitalize text-[45px] font-bold'>Find your perfect ride today</h1>
          <h4 className='font-semibold'>Over 1000+ New Cars Available Here</h4>
           <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo ipsa quasi perferendis corporis placeat veniam commodi. Deserunt nulla corrupti natus, doloribus esse nostrum architecto ipsum repudiandae laborum dolor quasi.</p>
         <div className='flex items-center gap-2'>
            <Button>Explore More</Button>
            <button className='border-2 border-primary p-[5px] rounded-[5px] hover:bg-primary'>See Cars</button>
         </div>
       </div>
       <img src={hero} alt=""  className='w-[510px]'/>
    </div>
  )
}

export default Hero
