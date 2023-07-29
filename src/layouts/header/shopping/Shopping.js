import React from 'react'
import Items from './Items'
import Total from './Total'

const Shopping = ({active}) => {
    return (
        <div className={active? "shopping active" : "shopping"}>
            <Items />
            <Total />
        </div>
    )
}

export default Shopping