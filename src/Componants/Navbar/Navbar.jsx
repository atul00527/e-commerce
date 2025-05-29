import React, { useState } from 'react'
import "./Navbar.css"
import cart from "../../../public/assets/cart.jpg"
import logo from "../../../public/assets/logo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" height="90px" />
            
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link to="/"> Home</Link>
                {menu==="home" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/">Men</Link>
                   {menu==="mens" ? <hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("womens")}}><Link to="/">Women</Link>
                   {menu==="womens" ? <hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/">Kids</Link>
                   {menu==="kids" ? <hr/>:<></>}
            </li>
        </ul>
        <div className="nav-login-card">

            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart} alt="" height="39px"/></Link>
            <div className="nav-cart-count">0</div>
        </div>
         
    </div>
  )
}

export default Navbar
