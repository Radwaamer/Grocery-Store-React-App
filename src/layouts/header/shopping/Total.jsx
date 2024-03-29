import React, { useContext } from 'react'
import ShoppingContext from '../../../context/ShoppingContext'

const Total = () => {
    const {card}=useContext(ShoppingContext);
    let count=0;
    card.forEach(pro=>(count+=(+(pro.price).slice(1))))
    return (
        <div className="total">
            <p>Total: <span>{count}</span></p>
            <button className="main-btn">Checkout Cart</button>
        </div>
    )
}

export default Total