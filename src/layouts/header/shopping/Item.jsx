import React, { useContext } from 'react'
import ShoppingContext from './../../../context/ShoppingContext';

const Item = ({pro}) => {
    const {card,setCard}= useContext(ShoppingContext);
    return (
        <div className="item">
            <img src={require(`../../../assets/images/products pro/${pro.img}`)} alt={pro.title} />
            <div className="text">
                <h5>{pro.title}</h5>
                <p>1 X {pro.price}</p>
            </div>
            <p onClick={()=>setCard(card.filter(product=>pro.id!=product.id))}>x</p>
        </div>
    )
}

export default Item