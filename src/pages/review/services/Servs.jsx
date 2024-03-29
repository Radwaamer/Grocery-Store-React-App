import React from 'react'
import airplane from '../../../assets/images/review icons/airplane.png';
import headphone from '../../../assets/images/review icons/headphone.png';
import protect from '../../../assets/images/review icons/protect.png';

const Servs = () => {
    const service=[airplane,headphone,protect].map((serv,index)=>{
        return(
            <div key={index} className="service">
                <img src={serv} alt="" />
                <div className="text">
                    <p>Fast Delivery</p>
                    <span>Within 30 Minutes</span>
                </div>
            </div>
        )
    });

    return (
        <>
        {service}
        </>
    )
}

export default Servs