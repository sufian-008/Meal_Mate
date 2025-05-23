import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
          <div className="footer-content-left">
             <img src={assets.logo} />
             <p>this apps asdfadfadf</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
          </div>
          <div className="footer-content-center">
                       <h2>Company</h2>
                       <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                       </ul>
          </div>
          <div className="footer-content-right">
                 <h2>Get In Touch</h2>
                 <ul>
                    <li>+8801731302437</li>
                     <li>mdrafin08@gmail.com</li>
                 </ul>
          </div>
       </div>
       <hr/>
       <p className='footer-copyright'>Copyright 2025 </p>
    </div>
  )
}

export default Footer
