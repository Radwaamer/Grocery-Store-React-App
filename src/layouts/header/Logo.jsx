import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to={"/"} className="logo">
      <i className="fa-solid fa-basket-shopping"></i>
      <p>Groco</p>
    </NavLink>
  )
}

export default Logo