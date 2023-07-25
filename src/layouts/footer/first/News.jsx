import React from 'react'
import Visa from '../../../assets/images/payment methods/Visa.svg.png'
import MasterCard from '../../../assets/images/payment methods/MasterCard.svg.webp'
import PayPal from '../../../assets/images/payment methods/PayPal.svg.png'

const News = () => {
    return (
        <div className="news">
            <h3>Newsletter</h3>
            <form action="">
                <label htmlFor="email-news">Subscribe For Latest Updates</label>
                <input type="email" name="email" id="email-news" placeholder="enter your email" />
                <button className="main-btn" type="submit">Submit</button>
            </form>
            <div className="payment">
                <a href=""><img src={Visa} alt="Visa" /></a>
                <a href=""><img src={MasterCard} alt="MasterCard" /></a>
                <a href=""><img src={PayPal} alt="PayPal" /></a>
            </div>
        </div>
    )
}

export default News