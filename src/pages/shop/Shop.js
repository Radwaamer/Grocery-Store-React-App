import React from 'react'
import Title from '../../components/title/Title'
import Categories from './categories/Categories'
import Products from './products/Products';

const Shop = () => {

    return (
        <section className="shop">
            <Title title={"Shop Now"} />

            <Categories />

            <Products />

        </section>
    )
}

export default Shop