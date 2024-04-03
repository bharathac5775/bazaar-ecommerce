import React, { useState } from 'react'
import './Payment.css'
const Payment = (prop) => {
 const [clicked,setclicked]=useState("card");
 const [checkdvalue,setcheckedvalue] = useState("card");
  
  return (
    <>
        <div className='All-payment'>
           <div className="payment-progress">
                <div className="payment-circle"> <h6>1.Cart</h6></div>
                <div className="payment-line"></div>
                <div className="payment-circle"><h6>2.Details</h6></div>
                <div className="payment-line"></div>
                <div className="payment-circle"><h6>3.Payment</h6></div>
           </div>
           <div className="payment-content">
                <div className="payment-left">
                      <div className="radio-btn">
                      <form >

                          <label><input type='radio' value="card" className='radio' onClick={()=>{setclicked("card");setcheckedvalue("card")}} checked={checkdvalue==="card"}></input><h6>Pay with credit card</h6></label>
                          {
                            clicked==="card"?<div className='payment-input-col'>
                              <div className="payment-input-row">
                              <input placeholder='Card Number'></input>
                              <input placeholder='Exp Date'></input>
                              </div>
                              <div className="payment-input-row">
                              <input placeholder='Card Name'></input>
                              <input placeholder='Name on Card'></input>
                              </div>
                              <button className='card-submit-btn'>Submit</button>

                            </div>:""
                          }
                          <label><input type='radio'className='radio' onClick={()=>{setclicked("paypal");setcheckedvalue("paypal")}} checked={checkdvalue==="paypal"}></input><h6>Pay with Paypal</h6></label>
                          {
                            clicked==="paypal"?<div className='payment-input-col'>
                             <div className="payment-input-row">
                              <input placeholder='Card Number'></input>
                              <input placeholder='Exp Date'></input>
                              </div>
                              <div className="payment-input-row">
                              <input placeholder='Card Name'></input>
                              <input placeholder='Name on Card'></input>
                              </div>
                                <button className='card-submit-btn'>Submit</button>
                          </div>:""
                          }
                          <label><input type='radio' className='radio' onClick={()=>{setclicked("cash");setcheckedvalue("cash")}} checked={checkdvalue==="cash"}></input><h6>Cash On Delivery</h6></label>
                      </form>
                      </div>
                      <div className="payment-btn">
                          <button className='payment-back' onClick={()=>{prop.showpayment(0);prop.showdetails(1)}}>Back To Checkout Details</button>
                          <button className='payment-review' onClick={()=>{prop.showpayment(0);prop.showpagination(1)}}>Review</button>
                      </div>
                </div>
                <div className="payment-right">
                   <div className="payment-amount">
                    <div className="payment-values">
                      <h5>Subtotal:</h5>
                      <h4>US$2,610.00</h4>
                    </div>
                    <div className="payment-values">
                      <h5>Shipping:</h5>
                      <h4>-</h4>
                    </div>
                    <div className="payment-values">
                      <h5>Tax:</h5>
                      <h4>US$40.00</h4>
                    </div>
                    <div className="payment-values">
                      <h5>Discount:</h5>
                      <h4>-</h4>
                    </div>
                    <hr />
                    <div className="payment-values">
                      <h5> </h5>
                      <h3 style={{color:"#ff4141"}}>US$2,650.00</h3>
                    </div>
                  
                   </div>
                </div>

           </div>

        </div>
    
    </>
  )
}

export default Payment