import React from 'react'

function NewsCard({id,img, desc}) {
  return (
    <div
    className=" border-2 border-secondary rounded-md cursor-pointer h-[300px]"
    key={id}
  >
    <img src={img} alt="img" className='h-[200px] w-full' />
    <h3 className=" font-semibold text-lg p-2">{desc}</h3>
  </div>
  )
}

export default NewsCard
