import React from 'react'
import { Link } from 'react-router-dom'

import fruits from '../../../assets/images/products categories/fruits.jpg'
import veg from '../../../assets/images/products categories/veg.jpg'
import spices from '../../../assets/images/products categories/spices.jpg'
import wheat from '../../../assets/images/products categories/wheat.jpg'
import meat from '../../../assets/images/products categories/meat.jpg'

const Cats = () => {
    const cats=[
        {id:1, img:fruits, path:"/", desc:"Fresh Fruit"},
        {id:2, img:veg, path:"/", desc:"Vegetables"},
        {id:3, img:spices, path:"/", desc:"Organic Spices"},
        {id:4, img:wheat, path:"/", desc:"Organic Wheat"},
        {id:5, img:meat, path:"/", desc:"Fresh Meat"}
    ];

    const cat= cats.map(c=>{
        return(
            <div key={c.id} className="cat">
                <img src={c.img} alt={c.desc} />
                <Link to={c.path}>{c.desc}</Link>
            </div>
        )
    })

    return (
        <div className="cats">
                <div className="container">

                    {cat}

                </div>
            </div>
    )
}

export default Cats