import React, { useEffect, useState } from 'react'
import './Pagination1.css'
import basket from '../Assets/basket.png'
import heart from '../Assets/heart.png'
import support from '../Assets/customer-support.png'
import profile from '../Assets/profile.png'
import address from '../Assets/pin.png'
import wallet from '../Assets/wallet.png'
const Pagination1 = () => {
    const  ordervalues=[
        {
            No:'12345678',
            State:'pending',
            Date:'10/02/2018',
            Total:'10000'
        },
        {
            No:'12345678',
            State:'pending',
            Date:'10/02/2018',
            Total:'10000'
        },
        {
            No:'12345678',
            State:'pending',
            Date:'10/02/2018',
            Total:'10000'
        },
        {
            No:'12345678',
            State:'pending',
            Date:'10/02/2018',
            Total:'10000'
        },
        {
            No:'12345678',
            State:'pending',
            Date:'10/02/2018',
            Total:'10000'
        },
        {
            No:'12345678',
            State:'pending',
            Date:'10/02/2018',
            Total:'10000'
        },
        {
            No:'12345678',
            State:'pending',
            Date:'10/02/2018',
            Total:'10000'
        }

    ];
     const valueperpage=3
    const totalpage=Math.ceil(ordervalues.length/valueperpage);
    const totalpagearray=[];
    for(let i=1;i<=totalpage;i+=1)
      totalpagearray.push(i);
    
      const [currentpage,setcurentpage]=useState(1);
      const [start,setstart]=useState(0);
      const [end,setend]=useState(valueperpage);

      useEffect(()=>{
        setstart((currentpage-1)*valueperpage);
        setend(((currentpage-1)*valueperpage)+valueperpage)
      },[currentpage]);

  return (
    <div className='pagination1'>
        <div className='pagination1-left'>
            <div className="dashboard">
                <h4>DASHBOARD</h4>
                <div className="pagination-orders">
                    <div className="pagination-text">
                    <img src={basket}alt="" />
                    <h5>Orders</h5>
                    </div>
                    <h5>5</h5>
                </div>
                <div className="pagination-orders">
                <div className="pagination-text">
                    <img src={heart}alt="" />
                    <h5>Wishlist</h5>
                </div>    
                    <h5>19</h5>
                </div>
                <div className="pagination-orders">
                <div className="pagination-text">
                    <img src={support}alt="" />
                    <h5>Support ticket</h5>
                </div> 
                    <h5>1</h5>
                </div>    
            </div>
            <div className="acc-setting">
                 <h4>ACCOUNT SETTINGS</h4>
                 <div className="pagination-orders">
                    <div className="pagination-text">
                        <img src={profile}alt="" />  
                        <h5>Profile info</h5>
                    </div> 
                    <h5>3</h5>
                 </div>
                 <div className="pagination-orders">
                    <div className="pagination-text">
                            <img src={address}alt="" />
                            <h5>Address</h5>
                    </div>
                    <h5>16</h5>
                 </div>
                 <div className='pagination-orders'>
                    <div className="pagination-text">
                        <img src={wallet}alt="" />   
                        <h5>Payment method</h5>
                    </div>
                    
                    <h5>4</h5>
                 </div>
            </div>
        </div>
        <div className='pagination1-right'>
            <h2>MY ORDERS</h2>
            <div className="heading-text">
                <h5>Order#</h5>
                <h5>Status</h5>
                <h5>Date Purchased</h5>
                <h5>Total</h5>
            </div>
           <div className="pagination-heading">
            {
                ordervalues.slice(start,end).map((val,ind)=>{
                    return <div className='heading-content'>
                        <h5>{val.No}</h5>
                        <h5>{val.State}</h5>
                        <h5>{val.Total}</h5>
                        <h5>{val.Date}</h5>
                    </div>
                })
            }
            <div className="totpage">
            {
                totalpagearray.map((val,index)=>{
                    return <h5  key={index} onClick={()=>{setcurentpage(val)}}>
                      {val}
                    </h5>
                })
             }

                
            </div>
           </div>
        </div>
    </div>
  )
}

export default Pagination1
