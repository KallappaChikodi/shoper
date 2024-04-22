import React from 'react'
import './NewCollection.css'
import  new_collections from "../assets/new_collections"
import Item from '../Items/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
         <h1>New Collection</h1>
         <hr/>
         <div className='collection'>
         {new_collections.map((item,i)=>{
             return <Item key={i} id={item.id} title={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>

         })}

         </div>

    </div>
  )
}

export default NewCollection