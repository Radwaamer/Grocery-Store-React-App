import React from 'react'
import veg from '../../../assets/images/home banner/veg.png';
import pepper from '../../../assets/images/home banner/pepper.jpg';
import pineapple from '../../../assets/images/home banner/pineapple.jpg'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Content = () => {
    const content=[veg,pepper,pineapple].map((img,index)=>{
        return(
            <SwiperSlide key={index}>
                {({isActive})=>{
                    return <div className={isActive ? "content active": "content"} >
                    
                        <div className="text">
                            <p>Fresh And Organic</p>
                            <h2>Upto 50% Off</h2>
                            <button className="main-btn">Shop Now</button>
                        </div>

                        <div className="image">
                            <img src={img} alt="" />
                        </div>

                    </div>
                }}
            </SwiperSlide>
        )
    })
    return (
        <>
        <Swiper 
            navigation={{
                nextEl: ".arrow-next",
                prevEl: ".arrow-prev",
                disabledClass: "swiper-button-disabled"
            }}
            modules={[Navigation]}
            loop={true}>
            {content}
            </Swiper>
        </>
    )
}

export default Content