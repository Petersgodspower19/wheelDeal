import React from 'react'
import { NavLink } from 'react-router-dom'

function Links({children, to, onClick}) {
  return (
    <NavLink to={`/${to}`} onClick={onClick} className="text-white hover:text-primary no-underline text-[15px]">
      {children}
    </NavLink>
  )
}

export default Links
