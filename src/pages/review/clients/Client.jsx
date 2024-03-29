import React from 'react';
import pic1 from '../../../assets/images/review clients/pic-1.jpg';
import pic2 from '../../../assets/images/review clients/pic-2.jpg';
import pic3 from '../../../assets/images/review clients/pic-3.jpg';
import pic4 from '../../../assets/images/review clients/pic-4.jpg';
import pic5 from '../../../assets/images/review clients/pic-5.jpg';
import pic6 from '../../../assets/images/review clients/pic-6.jpg';

const Client = () => {
    const client=[pic1,pic2,pic3,pic4,pic5,pic6].map((cli,index)=>{
        return(
            <div key={index} className="client">
                <div className="id">
                    <img src={cli} alt="" />
                    <div className="text">
                        <p>John Deo</p>
                        <span>Happy Client</span>
                    </div>
                </div>
                <p className="descreption">
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Corrupti suscipit cum 
                    odio necessitatibus repudiandae repellat 
                    sequi in ullam.
                </p>
            </div>
        )
    })

    return (
        <>
        {client}
        </>
    )
}

export default Client