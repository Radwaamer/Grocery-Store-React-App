import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({active}) => {
  return (
    <ul className={active? "menu active" : "menu"}>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/shop"}>Shop</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/review"}>Review</NavLink></li>
        <li><NavLink to={"/blog"}>Blog</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
    </ul>
  )
}

export default Menu;