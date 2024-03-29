import React, { useContext, useState } from 'react';
import ShoppingContext from '../../../context/ShoppingContext';

const Product = ({pro}) => {
    const [add,setAdd]=useState(false);
    const [like,setLike]=useState(false);
    const {card,setCard}=useContext(ShoppingContext);

    const handleShopping=(pro)=>{
        if(!add){
        setCard([...card,pro])
        }else{
        setCard(card.filter(product=>pro.id!=product.id))
        }
        setAdd(!add);
    }

            
    return (
        <div className="pro">
                <img src={require(`../../../assets/images/products pro/${pro.img}`)} alt={pro.title} />
                <p>{pro.title}</p>
                <span>{pro.price}</span>
                <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="overlay">
                    <div className="options">
                        <i onClick={()=>{handleShopping(pro)}} className={`${add?"active":""} fa-solid fa-cart-shopping`}></i>
                        <i onClick={()=>{setLike(!like)}} className={`${like?"active":""} fa-solid fa-heart`}></i>
                        <i className="fa-solid fa-eye"></i>
                    </div>
                </div>
        </div>
    )
}

export default Product