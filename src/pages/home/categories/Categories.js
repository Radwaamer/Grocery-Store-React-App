import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <section className="categories">
            <div className="container">

                {[1,2,3].map(cat=>{
                    return(
                        <div key={cat} className="cat">
                            <p>Limited Sales</p>
                            <h4>Upto 75% Off</h4>
                            <Link to={"/shop"}><button className="main-btn">Shop Now</button></Link>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Categories