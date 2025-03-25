import React from 'react'

import Navbar from './components/navbar/navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
     <div className='app'>
     <Navbar/>
     <Home/>
    </div>

     <Footer/>
    </>
   
  )
}

export default App
