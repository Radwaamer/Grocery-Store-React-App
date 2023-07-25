import React from 'react'

const Link = (props) => {
    const link=props.link[Object.keys(props.link)[0]].map((l,index)=>{
        return(
        <li key={index}>
            {props.index!=2 ?
            <a href="#">
                <i className="fa-solid fa-arrow-right"></i>
                <p>{l}</p>
            </a>: 
            <a href="#">
                {l[Object.keys(l)[0]]}
                <p>{Object.keys(l)[0]}</p>
            </a>
            }
        </li>
    )})
    
    return (
        <>
        {link}
        </>
    )
}

export default Link