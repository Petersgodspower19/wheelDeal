import React from 'react'

function Button({children}) {
  return (
    <button className='p-[5px] w-[120px] bg-primary text-white rounded-[5px]'>
      {children}
    </button>
  )
}

export default Button
