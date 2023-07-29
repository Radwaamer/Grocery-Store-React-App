import React from 'react'
import 'swiper/css';

import Controls from '../../../components/controls/Controls';
import Content from './Content';


const Banner = () => {
    return (
        <section className="banner">

            <Controls />

            <Content />

        </section>
    )
}

export default Banner