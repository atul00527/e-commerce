import React, { useState } from 'react'
import "./Navbar.css"
import cart from "../../assets/cart.jpg"
import logo from "../../assets/logo.jpg"

const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" height="90px" />
            
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}>Home
                {menu==="home" ? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>Men
                   {menu==="mens" ? <hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("womens")}}>Women
                   {menu==="womens" ? <hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("kids")}}>Kids
                   {menu==="kids" ? <hr/>:<></>}
            </li>
        </ul>
        <div className="nav-login-card">
            <button>Login</button>
            <img src={cart} alt="" height="39px"/>
            <div className="nav-cart-count">0</div>
        </div>
         
    </div>
  )
}

export default Navbar
