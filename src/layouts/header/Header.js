import React, { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Icons from './Icons';
import Search from './Search';
import Shopping from './shopping/Shopping';
import Profile from './Profile';

const Header = () => {
    const [menu,setMenu]=useState(false);
    const [search,setSearch]=useState(false);
    const [cart,setCart]=useState(false);
    const [profile,setProfile]=useState(false);

    function showMenu(){
        setMenu(!menu)
    };

    function searchForm(){
        setSearch(!search)
    };

    function shoppingCart(){
        setCart(!cart)
    };

    function profileLogin(){
        setProfile(!profile)
    };

    return (
        <header>
            <div className="container">

                <Logo />
        
                <Menu active={menu}/>
        
                <Icons showMenu={showMenu} searchForm={searchForm} 
                shoppingCart={shoppingCart} profileLogin={profileLogin} />

                <Search active={search}/>

                <Shopping active={cart}/>

                <Profile active={profile}/>

            </div>
        </header>
    )
}

export default Header