import React from 'react'
import { Link } from 'react-router-dom'

const Title = ({title}) => {
    return (
        <div className="title">
            <div className="layout">
                <h1>{title}</h1>
                <p><Link to={"/home"}>Home {`>>`} </Link><span>{(window.location.hash).slice(2)}</span></p>
            </div>
        </div>
    )
}

export default Title