import React from 'react'
import Title from '../../components/title/Title'
import OurShop from './our shop/OurShop'
import Gallery from './gallery/Gallery'

const About = () => {

    return (
        <section className="about">
            <Title title={"About Us"}/>

            <OurShop />

            <Gallery />

        </section>
    )
}

export default About