import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
const App = () => {
   const  [ShowLogin, setShowLogin] = useState(false);

  return (
    <>
     {ShowLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
