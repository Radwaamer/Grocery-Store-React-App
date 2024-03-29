import React, { useContext } from 'react';
import Item from './Item';
import ShoppingContext from './../../../context/ShoppingContext';

const Items = () => {
  const {card}=useContext(ShoppingContext);
  const items=card.map(pro=><Item key={pro.id} pro={pro}/>)
  return (
    <div className="items">
      {items}
    </div>
  )
}

export default Items