import React from 'react'

function AboutCard({url,  heading}) {
  return (
    <div className='p-[10px] w-[80%] md:w-[350px] bg-[hsl(0,0%,90%)] rounded-[5px] text-center'>
      <div className='text-center'>
      {url}
      </div>
      <h1 className='text-primary  text-[20px]'>{heading}</h1>
      <p className='text-[14px]  text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam distinctio possimus voluptates mollitia blanditiis doloremque dignissimos libero veniam nostrum necessitatibus labore repudiandae quaerat impedit illo numquam, sint excepturi. Nisi, eius?</p>
    </div>
  )
}

export default AboutCard
