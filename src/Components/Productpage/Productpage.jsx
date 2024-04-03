import React, { useState } from 'react';
import styled from 'styled-components';
import './Productpage.css'
import titan from '../Assets/titan.jpg'
import titan2 from '../Assets/titan2.jpg'
import incorrect from '../Assets/incorrect.png'


const Product = (props) => {
  const [intial,setintial]=useState(titan);
  const [review1,setreview1]=useState(0);
  return (
    <div className='productpage'>
      <div className="productpage-left">
           <div className="piclarge">
               <img src= {intial} alt="" />
           </div>
           <div className="picsmall">
              <img src= {titan} onClick={()=>{setintial(titan)}} alt="" />
              <img src= {titan2} onClick={()=>{setintial(titan2)}} alt="" />
           </div>
           <div className="product-review">
               <h4>Description</h4>
               <div className='product-review-chang'> <h4 style={{color:"#ff4141"}} onClick={()=>{setreview1(1)}}>Review(3)</h4></div>
               
           </div>
      </div>
      <div className="productpage-right">
        <h1>Classic Titan Watch</h1>
        <h6>Brand : Xiaomi</h6>
        <h6>Rated : ⭐⭐⭐⭐ (50)</h6>
         <br />
         <h6>Options</h6>
         <div className="product-btn-option">
          <button>option 1</button>
          <button>option 2</button>
          <button>option 3</button>
          <button>option 4</button>
         </div>
         <h6>Type</h6>
         <div className="product-btn-type">
         <button>Type 1</button>
          <button>Type 2</button>
          <button>Type 3</button>         
         </div>
         <h2 className='doller'>US$350.00</h2>
          <h6>Stock Available</h6>
          <div className="product-addtocart-btn">
         <button>Add To Cart</button>         
         </div>
         <h6>Sold By: <em>Mobile Store</em></h6>
      </div>

      <Reviewpage show={review1}>

      <img className='side-img-rev' src={incorrect} onClick={()=>setreview1(0)} alt="" />
      <div className='rev1'>
      <h3>Jannie Schumm</h3>
       <h6>⭐⭐⭐⭐⭐ 5/5 </h6>
       <p>dcjecwkdmx wienxwjkx wdjc wdi wjnwokmx we oijwew owd womxe xoqw</p>    
       <p>sdcm e ec wewde3x we rg ecwcwewx we 3edwecwe fwddefw cwede</p>    
      </div>
       <div className='rev2'>
       <h3>Joe Henen</h3>
       <h6>⭐⭐⭐⭐ 4/5 </h6>
       <p>dcjecwkdmx wienxwjkx wdjc wdi wjnwokmx we oijwew owd womxe xoqw</p>    
       <p>sdcm e ec wewde3x we rg ecwcwewx we 3edwecwe fwddefw cwede</p> 
       </div>
       <div className='rev3'>
       <h3>Jenifer lio</h3>
       <h6>⭐⭐⭐⭐ 4/5 </h6>
       <p>dcjecwkdmx wienxwjkx wdjc wdi wjnwokmx we oijwew owd womxe xoqw</p>    
       <p>sdcm e ec wewde3x we rg ecwcwewx we 3edwecwe fwddefw cwede</p> 
       </div>
       <h1>Write a Review for this product</h1>
       <input type="text" placeholder='Your Review' />
      </Reviewpage>
    </div>
  )
}
const Reviewpage = styled.div`
  height: 585px;
    width: 100%;
    position: absolute;
    background-color: white;
    top: 110px;
    transform: translateY(${prop=>prop.show?0:590}px);
   
    transition: 0.5s;
    padding-left: 70px;
`;
export default Product