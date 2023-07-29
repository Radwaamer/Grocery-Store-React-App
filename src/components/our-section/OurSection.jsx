import React from 'react'
import { Link } from 'react-router-dom'

const OurSection = ({section}) => {
    return (
        <div className="our-section">
        <div className="container">
            <div>
                <h3>Our <span>{section}</span></h3>
                <Link href="">View All {">>"}</Link>
            </div>
            <hr />
        </div>
        </div>
    )
}

export default OurSection