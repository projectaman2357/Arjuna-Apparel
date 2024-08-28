import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
 const Navbar = () => {
    

const [menu,setmenu] = useState("Shop");
    return(
        <div className='navbar'>
<div className="nav-logo">
    <img src={logo} alt=''/>
    <p>Arjuna Apparel</p>
</div>
<ul className="nav-menu">
    <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration: 'none'}} to='/Shop'>SHOPS</Link>{menu==="Shop"?<hr/>:<></>}</li>
    {/*textdecoration is used ro remove  under line */}
    <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none'}} to='/men'>MENS</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none'}} to='/women'>WOMENS</Link>{menu==="womens"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kid'>KIDS</Link>{menu==="kids"?<hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
    <Link to='/login'><button>Login</button></Link>
     <Link to='/cart'><img src={cart_icon} alt=''/></Link>
     <div className="nav-cart-count">0</div>
</div>
        </div>
    )
 }

 export default Navbar