import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
 const Navbar = ({setShowLogin}) => {
        const [menu, SetMenu] = useState('Home');
        const {getTotalCartAmount} = useState(StoreContext);
  
  return (

    <div className='navbar'> 
      <img src={assets.logo} alt="" className='logo' />
      <ul className='navbar-menu'>
        <li onClick={()=>SetMenu("Home")} className={menu === "Home"?"active":""}>Home</li>
        <a href='#explore-menu' onClick={()=>SetMenu("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>SetMenu("Mobile-App")} className={menu === "Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>SetMenu("Contact Us")} className={menu === "Contact Us"?"active":""}>Contact Us</a>

      </ul>

      <div className='navbar-right'>
     <img src={assets.search_icon} alt="" className='search-icon'/>
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
           <div className={getTotalCartAmount?"":"dot"}></div>

        </div>
        <button onClick={()=>setShowLogin(true)} className='button'>SignIn</button>
      </div>
    </div>
  )
}

export default Navbar

