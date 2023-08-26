import React from 'react'

const Box = ({image,index}) => {
    return (
        <div className="box" key={index}>
            <img src={image} alt="our gallery" />
            <div className="icons">
                <i className="fa-solid fa-info"></i>
                <i className="fa-solid fa-heart"></i>
                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    )
}

export default Box;