import React from 'react'
import OurSection from '../../../components/our-section/OurSection'
import Prods from './Prods';

const Products = () => {
  return (
    <div className="products">

      <OurSection section={"products"}/>
      <Prods />

    </div>
  )
}

export default Products;