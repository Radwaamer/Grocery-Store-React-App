import React from 'react'

const Icons = (props) => {
    return (
        <div className="icons">
            <i className="fa-solid fa-magnifying-glass" onClick={props.showMenu}></i>
            <i className="search fa-solid fa-magnifying-glass" onClick={props.searchForm}></i>
            <i className="fa-solid fa-cart-shopping" onClick={props.shoppingCart}></i>
            <i className="fa-solid fa-user" onClick={props.profileLogin}></i>
        </div>
    )
}

export default Icons