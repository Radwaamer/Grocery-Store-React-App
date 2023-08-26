import React from 'react'
import basket from '../../../assets/images/about us/holding basket.jpg';
import couple from '../../../assets/images/about us/couple holding basket.avif';
import milk from '../../../assets/images/about us/testing milk.jpg';
import Box from './Box';

const OurGallery = () => {
    const boxes= [basket,milk,couple,milk,couple,basket].map((box,index)=>(<Box image={box} key={index} />))
    return (
        <div className="our-gallery">
                <div className="container">

                    {boxes}
    
                </div>
            </div>
    )
}

export default OurGallery