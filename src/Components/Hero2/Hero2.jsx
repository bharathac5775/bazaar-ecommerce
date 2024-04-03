import React from 'react'
import './Hero2.css'
import hero2_img from '../Assets/pic2.png'
const Hero2 = (props) => {
  return (
    <div className='hero2'>
         <div className="hero2-left">
           <h2>70% Off For Your First Shopping</h2>
           <div>
              <p>shdieso widmdkc wkadniq lac woqprudnx maqcej qldkf arledhsgcbn </p>
              <p>dklancabfgdruhdk sdkd,sncmwkdmfsle</p>
              <p>ajxmdkfn sjdckwdc wdkwmwd wjdckealxaxl fvjek</p>
           </div>
           <div className="hero2-shop-btn">
            <div onClick={()=>{props.click30(0);props.click20(1);}}>Shop Now</div>
           </div>
        </div>

        <div className="hero2-right">
           <img src={hero2_img} alt="" />
        </div>
    </div>
  )
}

export default Hero2