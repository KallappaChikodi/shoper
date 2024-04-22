import React from 'react'
import exclusive_offer from '../assets/exclusive_image.png'
import "./Offers.css"
const Offers = () => {
  return (
    <div className='offers' >
        <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>Checkout latest offer</p>
        <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_offer} alt=''></img>

        </div>
    </div>
  )
}

export default Offers