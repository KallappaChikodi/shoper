import React from 'react'
import "./Popular.css"
import data_product from "../assets/data.js"
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular In Women</h1>
        <hr/>
        <div className='popular-items'>
         {data_product.map((item, i)=>{
            return <Item key={i} id={item.id} title={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>

         })}

        </div>

       

    </div>
  )
}

export default Popular