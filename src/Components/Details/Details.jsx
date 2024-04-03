
import './Details.css'
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

function Details(prop) {
    const [checked, setChecked] = useState(false);

    const [name1,setname1]=useState("");
    const [name2,setname2]=useState("");

    const [email1,setemail1]=useState("");
    const [email2,setemail2]=useState("");

    const [phone1,setphone1]=useState("");
    const [phone2,setphone2]=useState("");

    const [company1,setcompany1]=useState("");
    const [company2,setcompany2]=useState("");

    const [zip1,setzip1]=useState("");
    const [zip2,setzip2]=useState("");

    const [country1,setcountry1]=useState("");
    const [country2,setcountry2]=useState("");

    const [address1,setaddress1]=useState("");
    const [address2,setaddress2]=useState("");
    
    const [add1,setadd1]=useState("");
    const [add2,setadd2]=useState("");

    const [clickcount,setclickcount]=useState(0);

    function handleclick(){
        console.log(name1);
     setclickcount(clickcount+1);
     if(clickcount%2!==1)
      {
        setname2(name1);
        setemail2(email1);
        setphone2(phone1);
        setcompany2(company1);
        setzip2(zip1);
        setcountry2(country1);
        setaddress2(address1);
        setadd2(add1);
      }
      else{
        setname2("");
        setemail2("");
        setphone2("");
        setcompany2("");
        setzip2("");
        setcountry2("");
        setaddress2("");
        setadd2("");
      }
    }

  return (
    <>
        <div className='All'>
           <div className="progress">
                <div className="circle"> <h6>1.Cart</h6></div>
                <div className="line"></div>
                <div className="circle"><h6>2.Details</h6></div>
                <div className="line"></div>
                <div className="circle"><h6>3.Payment</h6></div>
           </div>
           <div className="content1">
                <div className="card1">
                    <h5 style={{margin:"25px"}}>Shipping Address</h5>
                    <div className="inputs">

                        <div className="input2">
                            <input type="text" value={name1} onChange={(e) => setname1(e.target.value)} placeholder='Full Name'/>
                            <input type="text" value={email1} onChange={(e) => setemail1(e.target.value)} placeholder='Email Address'/>
                        </div>
                        <div className="input2">
                            <input type="text" value={phone1} onChange={(e) => setphone1(e.target.value)} placeholder='Phone Number'/>
                            <input type="text" value={company1} onChange={(e) => setcompany1(e.target.value)} placeholder='Company'/>
                        </div>
                        <div className="input2">
                            <input type="text" value={zip1} onChange={(e) => setzip1(e.target.value)}  placeholder='Zip code'/>
                            <input type="text" value={country1} onChange={(e) => setcountry1(e.target.value)}  placeholder='Country'/>
                        </div>
                        <div className="input2">
                            <input type="text" value={address1} onChange={(e) => setaddress1(e.target.value)}  placeholder='Address 1'/>
                            <input type="text" value={add1} onChange={(e) => setadd1(e.target.value)}  placeholder='Address 2'/>
                        </div>
                    </div>

                </div>
                <div className="card1">
                <h5 style={{margin:"25px"}}>Shipping Address</h5>
                <Checkbox className='check' onClick={handleclick} onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>Check if Address are same
                    <div className="inputs" style={{marginTop:"31px"}}>

                        <div className="input2">
                            <input type="text" value={name2} onChange={(e) => setname2(e.target.value)} placeholder='Full Name'/>
                            <input type="text" value={email2} onChange={(e) => setemail2(e.target.value)} placeholder='Email Address'/>
                        </div>
                        <div className="input2">
                        <input type="text" value={phone2} onChange={(e) => setphone2(e.target.value)} placeholder='Phone Number'/>
                            <input type="text" value={company2} onChange={(e) => setcompany2(e.target.value)} placeholder='Company'/>
                        </div>
                        <div className="input2">
                        <input type="text" value={zip2} onChange={(e) => setzip2(e.target.value)}  placeholder='Zip code'/>
                            <input type="text" value={country2} onChange={(e) => setcountry2(e.target.value)}  placeholder='Country'/>
                        </div>
                        <div className="input2">
                        <input type="text" value={address2} onChange={(e) => setaddress2(e.target.value)}  placeholder='Address 1'/>
                            <input type="text" value={add2} onChange={(e) => setadd2(e.target.value)}  placeholder='Address 2'/>
                        </div>
                    </div>
                </div>
                <div className="card2">
                      <div className="bill">
                       <div className="flex1">
                         <h6>Subtotal</h6>
                         <h6>US$2,610.00</h6>
                       </div>
                       <div className="flex1">
                       <h6>Shipping</h6>
                         <h6>US$0.00</h6>
                        </div>
                        <div className="flex1">
                        <h6>Tax</h6>
                         <h6>US$40.00</h6>
                        </div>
                        <div className="flex1">
                        <h6>Discount</h6>
                         <h6>US$0.00</h6>
                        </div>
                        <div className="flex1">
                            <h6> </h6>
                         <h5>US$2,650.00</h5>
                        </div>

                        <input className="inp2" type="text" placeholder='Enter your voucher no'/>
                        <button className='bt1'>Apply voucher</button>
                        <button className='bt2' onClick={()=>{prop.showdetails(0);prop.showcart(1)}}>Back To Cart</button>
                        <button className='bt3' onClick={()=>{prop.showdetails(0);prop.showpayment(1)}}>Proceed To Payment</button>
                      </div>
                      
                </div>
           </div>

        </div>
    
    </>
  )
}

export default Details