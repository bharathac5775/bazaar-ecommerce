import React, { useState } from 'react'
import './Menu.css'
import dress from '../Assets/dress.png'
import Electronics from '../Assets/laptop.png'
import Bikes from '../Assets/bycicle.png'
import garden from '../Assets/plant.png'
import gifts from '../Assets/gift-box.png'
import music from '../Assets/live-music.png'
import pets from '../Assets/pawprint.png'
import toys from '../Assets/box.png'

const Menu = (prop) => {

    const [menu,setMenu]=useState("home");
  return (
    <div className='mymenu' style={{height:"60px"}}>


      <div className="catgrories">
         
         <div class="dropdown">
  <button class="btn btn-secondary shadow-none  btn-outline-secondary dropdown-toggle " type="button" id="openPopup" data-bs-toggle="dropdown" aria-expanded="false">
  <span className="fas fa-border-all"></span>Categories
  </button>
  <ul class="dropdown-menu">
  <li><button class="dropdown-item" type="button"><img src={dress} alt="" />  Fashion</button></li>
    <li><button class="dropdown-item" type="button"> <img src={Electronics} alt="" /> Electronics</button></li>
    <li><button class="dropdown-item" type="button"> <img src={Bikes} alt="" />Bikes</button></li>
    <li><button class="dropdown-item" type="button"> <img src={garden} alt="" />Home & Garden</button></li>
    <li><button class="dropdown-item" type="button"> <img src={gifts} alt="" />Gifts</button></li>
    <li><button class="dropdown-item" type="button"> <img src={music} alt="" />Music</button></li>
    <li><button class="dropdown-item" type="button"> <img src={pets} alt="" />Pets</button></li>
    <li><button class="dropdown-item" type="button"> <img src={toys} alt="" />Baby Toys</button></li>
  </ul>
</div>
         {/* <h4>
          Categories <i className='fa fa-chevron-down'></i>
         </h4> */}
      </div>
      {/* <div className="all-categories">
     
      <select className='btn1' name="All Categories" >
               <option >All Categories</option>
       </select> 
        </div> */}


         <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home");prop.showpagination(0);prop.showhero(1)}}>Home {menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mega Menu")}}>Mega Menu {menu==="mega Menu"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("full Screen Menu")}}>Full Screen Menu {menu==="full Screen Menu"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("pages")}}>Pages {menu==="pages"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("user Account")}}>User Account {menu==="user Account"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("vendor Account")}}>Vendor Account {menu==="vendor Account"?<hr/>:<></>}</li>
         </ul>
    </div>
  )
}

export default Menu