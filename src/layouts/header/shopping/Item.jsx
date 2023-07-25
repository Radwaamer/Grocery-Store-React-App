import React from 'react'
import Banner from '../../../assets/images/home banner/pepper 1.jpg';

const Item = () => {
    return (
        <div className="item">
            <img src={Banner} alt="Banner" />
            <div className="text">
                <h5>Organic Food</h5>
                <p>1 X $18.99</p>
            </div>
            <p>x</p>
        </div>
    )
}

export default Item