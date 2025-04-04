import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, SetMenu] = useState('Home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")


  }

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className='navbar-menu'>
        <li onClick={() => SetMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <Link to='#explore-menu' onClick={() => SetMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</Link>
        <Link to='#seller' onClick={() => SetMenu("Seller")} className={menu === "Seller" ? "active" : ""}>Seller</Link>
        <Link to='#footer' onClick={() => SetMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</Link>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search" className='search-icon' />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className={getTotalCartAmount ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className='button'>SignIn</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="Orders" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
