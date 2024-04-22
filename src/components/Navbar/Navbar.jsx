import React, { useState } from 'react'
import './Navbar.css'
import carticon from '../assets/cart_icon.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const[menu,setMenu]=useState("shop");
  return (
    

   

    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='loag'/>
            <p>SHOPPER</p>

        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("shop")} ><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Men")}><Link to='/men' style={{textDecoration:'none'}}>Men</Link>{menu=="Men"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Women")}><Link to='/women' style={{textDecoration:'none'}}>Womens</Link>{menu=="Women"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Kids")}> <Link to="/kids" style={{textDecoration:'none'}}>Kids</Link>{menu=="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/loginsignup'><button>Login</button></Link>
     <Link to='/cart'>   <img src={carticon} alt='load'/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar