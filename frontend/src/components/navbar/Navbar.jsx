import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('Home');
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleSellerClick = (e) => {
    if (!token) {
      e.preventDefault();
      alert("Please login to your seller account!");
    } else {
      window.location.href = "http://localhost:5174/";
    }
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
      setShowSearch(false);
      setSearchInput('');
    }
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchInput('');
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />

      {/* Hamburger icon, will show only if the menu is closed */}
      {!isMobileMenuOpen && (
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <img src={assets.hamburger_icon} alt="Menu" />
        </div>
      )}

      {/* Close (X) icon, will show only if the menu is open */}
      {isMobileMenuOpen && (
        <div className="close-menu" onClick={() => setIsMobileMenuOpen(false)}>
          ×
        </div>
      )}

      <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href="http://localhost:5174/" onClick={handleSellerClick} className={menu === "Seller" ? "active" : ""}>Seller</a>
        <a href="#footer" onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search">
          <img
            src={assets.search_icon}
            alt="Search"
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearchSubmit}
                autoFocus
              />
              <span className="close-search" onClick={handleCloseSearch}>×</span>
            </div>
          )}
        </div>

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)} className="button">SignIn</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
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
};

export default Navbar;
