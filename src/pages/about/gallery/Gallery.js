import React from 'react'
import OurSection from './../../../components/our-section/OurSection';
import OurGallery from './OurGallery';

const Gallery = () => {
    return (
        <div className="gallery">

            <OurSection section={"gallery"}/>

            <OurGallery />

        </div>
    )
}

export default Gallery