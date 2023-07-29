import React from 'react'
import { footerData } from '../../../data/footerData'
import Links from './Links';

const List = () => {
        const links =footerData.map((link,index)=>{
            return (
            <ul key={index} className={Object.keys(link)[0].slice(0,Object.keys(link)[0].indexOf(" "))}>
                <h3>{Object.keys(link)[0]}</h3>
                    <Links link={link} index={index}/>
            </ul>
            )})
    return (
        <>
        {links}
        </>
    )
}

export default List