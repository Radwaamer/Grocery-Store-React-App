import React from 'react'
import bananas from '../../../assets/images/products pro/bananas.jpg'
import kiwi from '../../../assets/images/products pro/kiwi.jpg'
import meat from '../../../assets/images/products pro/meat.jpg'
import milk from '../../../assets/images/products pro/milk.jpg'

const Prods = () => {
  const pros=[bananas,kiwi,meat,milk,meat,milk,bananas,kiwi].map((pro,index)=>{
    return(
      <div class="pro" key={index}>
          <img src={pro} alt="Organic Food" />
          <p>Organic Food</p>
          <span>$18.99</span>
          <div class="rate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
          </div>
          <div class="overlay">
              <div class="options">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-solid fa-heart"></i>
                  <i class="fa-solid fa-eye"></i>
              </div>
          </div>
      </div>
    )
  })

  return (
    <div class="prods">
                <div class="container">
                  
                  {pros}

                </div>
            </div>
  )
}

export default Prods