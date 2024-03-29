import React from 'react'
import Title from './../../components/title/Title';
import Services from './services/Services';
import Clients from './clients/Clients';

const Review = () => {
    return (
        <section className="review"> 
            
            <Title />

            <Services />

            <Clients />

        </section>
    )
}

export default Review