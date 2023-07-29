import React from 'react'
import OurSection from '../../../components/our-section/OurSection'
import Cats from './Cats'

const Categories = () => {
    return (
        <div className="categories">

            <OurSection section={"categories"}/>
            <Cats />

        </div>
    )
}

export default Categories