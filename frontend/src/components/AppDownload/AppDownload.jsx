 import React from 'react'
 import './AppDownload.css'
import { assets } from '../../assets/assets'


 const AppDownload = () => {
   return (
     <div className='app-download' id='app-download'>
        <p>For Better Experience Download<br/> MealMate App</p>
        <div className="app-download-platforms">
             <img src={assets.play_store} alt="" />
             <img src={assets.app_store}/>
        </div>
       
     </div>
   )
 }
 
 export default AppDownload
 