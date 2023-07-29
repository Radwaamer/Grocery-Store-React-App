import React from 'react'
import Title from '../../components/title/Title'
import OurSection from '../../components/our-section/OurSection'
import Categories from './categories/Categories'

const Shop = () => {

    return (
        <section className="shop">
        <Title />

        <Categories />

        <div className="products">
            <OurSection section={"products"}/>
        </div>

    </section>
    )
}

export default Shop