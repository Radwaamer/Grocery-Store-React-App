import React, { useContext } from 'react'
import Items from './Items'
import Total from './Total'
import ShoppingContext from '../../../context/ShoppingContext'

const Shopping = ({active, setActive}) => {
    const {card}=useContext(ShoppingContext);
    return (
        <div className={active? "shopping active" : "shopping"}>
            {card.length!=0?
            <>
            <Items />
            <Total />
            </>
            :
            <div className='no-items'>
                <p>No Items To Show</p>
                <button onClick={()=>setActive(false)} className='main-btn'>Continue Shopping</button>
            </div>
            }
        </div>
    )
}

export default Shopping