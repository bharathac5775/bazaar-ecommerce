import React, { useState } from 'react'
import './Cartpage.css'
import incorrect from '../Assets/incorrect.png'
const Cartpage = (prop) => {
  const [deleteval,setdeleteval]= useState("");
  return (
    <>
        <div className='All-cart'>
           <div className="cart-progress">
                <div className="circle-cart"> <h6>1.Cart</h6></div>
                <div className="line-cart"></div>
                <div className="circle-cart"><h6>2.Details</h6></div>
                <div className="line-cart"></div>
                <div className="circle-cart"><h6>3.Payment</h6></div>
           </div>
           <div className="cart-content">
            <div className="cart-content-left">
                <div className="cart-content-items">
                    {
                        prop.cart20.map((val,ind)=>{
                        return deleteval!==val.name? <div className="cart-item" key={ind}>
                            <div className="cart-itmimg">
                                    <img className='i' src={val.image} alt="" />
                            </div>
                            <div className="cart-itmvalues">
                                    <h6>{val.name}</h6>  
                                    <h6>Quantity:{val.quantity}</h6>  
                                    <h6>${val.price}</h6>  
                            </div>
                            <div className="cart-wrong" onClick={()=>{setdeleteval(val.name)}}><img  src={incorrect}  alt="" />
                            </div>
                        </div>:""
                        })
                    }
                    </div>
            </div>
            <div className="cart-content-right">
                <div className="total-amt">
                    <h5>Total:</h5>
                    <h4>US$1,160.00</h4>
                </div>
                <div className="cart-voucher">
                    <input type="text" placeholder='Voucher' />
                    <button>Apply Voucher</button>
                </div>
                <div className="cart-shipping">
                    <h5>Shipping Estimates</h5>
                    <select  name="All Categories" >
                       <option >Country</option>
                    </select> 
                    <select  name="All Categories" >
                       <option >States</option>
                    </select> 
                    {/* <input type="text"placeholder='Zip Code' /> */}
                    <button className='cart-cal-btn'>Calculate Shipping</button>
                    <button className='cart-check-btn' onClick={()=>{prop.showcart(0);prop.showdetails(1)}}>checkout Now</button>
                </div>
            </div>
           </div>

        </div>
    
    </>
  )
}

export default Cartpage