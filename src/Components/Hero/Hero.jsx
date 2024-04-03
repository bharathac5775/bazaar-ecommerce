import React from 'react'
import './Hero.css'
import hero_img from '../Assets/pic1.png'

const Hero = () => {
  return (

    <div className='hero'>
        <div className="hero-left">
           <h2>50% Off For Your First Shopping</h2>
           <div>
              <p>shdieso widmdkc wkadniq lac woqprudnx maqcej qldkf arledhsgcbn </p>
              <p>dklancabfgdruhdk sdkd,sncmwkdmfsle</p>
              <p>ajxmdkfn sjdckwdc wdkwmwd wjdckealxaxl fvjek</p>
           </div>
           <div className="hero-shop-btn">
            <div>Shop Now</div>
           </div>
        </div>

        <div className="hero-right">
           <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero