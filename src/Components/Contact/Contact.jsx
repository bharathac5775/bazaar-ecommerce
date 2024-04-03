import React from 'react'
import './Contact.css'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import google from '../Assets/google.png'
import x from '../Assets/x.png'
const Contact = () => {
  return (
    <div  className='content'>
       <div className="hot">HOT</div>
       <p>Free Express Shipping</p>
       <did className="content-right">
       <select className='en' name="All Categories" >
               <option >EN</option>       
        </select> 
        <img className='im' src={google} alt="" />
        <img className='im' src={instagram} alt="" />
        <img className='im' src={facebook} alt="" />
        {/* <img className='im' src={x} alt="" /> */}
       </did>
    </div>
  )
}

export default Contact