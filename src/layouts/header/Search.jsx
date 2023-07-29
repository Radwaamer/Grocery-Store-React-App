import React from 'react'

const Search = ({active}) => {
    return (
        <form action="" className={active? "search-form active" : "search-form"}>
            <input type="search" name="search" id="search" placeholder="search here..." />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    )
}

export default Search