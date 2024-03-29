import React from 'react'
import { products } from '../../../data/products'
import Product from './Product'

const Prods = () => {

  const pros=products.fruits.map(pro=>{
    return(<Product key={pro.id} pro={pro}/>)
  })

  return (
    <div className="prods">
                <div className="container">
                  
                  {pros}
                  
                </div>
    </div>
  )
}

export default Prods