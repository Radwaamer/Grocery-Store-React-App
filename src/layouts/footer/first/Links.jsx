import React from 'react'
import { Link } from 'react-router-dom';

const Links = (props) => {
    const link=props.link[Object.keys(props.link)[0]].map((l,index)=>{
        return(
        <li key={index}>
            {props.index!=2 ?
            <Link to={"/"}>
                <i className="fa-solid fa-arrow-right"></i>
                <p>{l}</p>
            </Link>: 
            <Link to={"/"}>
                {l[Object.keys(l)[0]]}
                <p>{Object.keys(l)[0]}</p>
            </Link>
            }
        </li>
    )})
    
    return (
        <>
        {link}
        </>
    )
}

export default Links