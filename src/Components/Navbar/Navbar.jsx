import React , { useState }from 'react'
import {FaSearch} from 'react-icons/fa'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import basket from '../Assets/basket.png'
import login from '../Assets/login.png'
import Login from '../Login/Login'
import incorrect from '../Assets/incorrect.png'
import styled from 'styled-components'

const Navbar = (prop) => {
  const [modalShow, setModalShow] = useState(false);
  const [trans,settrans] = useState(0);
  // let total=0;
  return (
  
       <div className='navbar'>
           <div className="nav-logo">
             <img src={logo} alt="" />
             <p>Bazaar</p>
           </div>
          
           <div className="search">
              <FaSearch id='search-icon'/>
              <input style={{border:"none"}} type="text" placeholder='Searching for...' /> 
             
              <select className='btn' name="All Categories" >
               <option >All Categories</option>
               
             </select> 
              
           </div> 
           <div className="nav-log-cart">
            
              <img src={login} onClick={() => setModalShow(true)} alt="" />
              <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              
              <img  src={basket}  onClick={()=>settrans(1)} alt="" />
              <div className="nav-cart-count">{prop.cart20.length}</div>
            
           </div>
           <Sidebar trans={trans}> 
               <div className="sidebar-top">
                <h3 style={{color:"black"}}>{prop.cart20.length} Items</h3>
                <img className='side-img' src={incorrect} onClick={()=>settrans(0)} alt="" />
               </div>
                <div className="cart-items">
                  {
                    prop.cart20.map((val,ind)=>{
                      return <div className="item">
                      <div className="itmimg">
                              <img className='i' src={val.image} alt="" />
                      </div>
                      <div className="itmvalues">
                             <h6>{val.name}</h6>  
                             <h6>Quantity:{val.quantity}</h6>  
                             <h6>${val.price}</h6>  
                      </div>
                     </div>
                    })
                  }
                </div>
                <button className='cart-btn' onClick={()=>{prop.setContent(0);prop.setProduct(0);prop.setCart(1);}}>View Cart</button>
           </Sidebar>
           
       </div>
         
  )
}
const Sidebar = styled.div`
  width: 400px;
  height: 653px;
  position:fixed;
  left: 1200px;
  top:40px;
  background-color:  #e0e5fa;
  transform: translateX(${prop=>prop.trans?0:400}px);
  transition: 0.5s;
  color: white;
`;

export default Navbar