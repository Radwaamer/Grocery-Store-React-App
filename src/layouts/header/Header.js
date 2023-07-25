import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Icons from './Icons';
import Search from './Search';
import Shopping from './shopping/Shopping';
import Profile from './Profile';

const Header = () => {

    // handle icons
    function toggleIcons(icon){
        // document.querySelector(`header ${icon}`).classList.toggle("active");
    }

    function showMenu(){
        // toggleIcons(".menu");
    };

    function searchForm(){
        // toggleIcons(".search-form");
    };

    function shoppingCart(){
        // toggleIcons(".shopping");
    };

    function profileLogin(){
        // toggleIcons(".profile");
    };

    // handle active link
    // document.querySelectorAll("header .menu li a").forEach((a)=>{
    //     if(a.href.includes(window.location.pathname)){
    //         a.classList.add("active");
    //     }
    // })

    return (
        <header>
            <div className="container">

                <Logo />
        
                <Menu />
        
                <Icons showMenu={showMenu} searchForm={searchForm} shoppingCart={shoppingCart} profileLogin={profileLogin} />

                <Search />

                <Shopping />

                <Profile />

            </div>
        </header>
    )
}

export default Header