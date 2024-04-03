import Modal from 'react-bootstrap/Modal';
import logo from '../Assets/logo.jpg'
import React, { useState } from "react";
import { Password } from 'primereact/password';
import './Login.css'
import facebook from '../Assets/facebook.png'
import google from '../Assets/google.png'
        
function Login(props) {

    const [value, setValue] = useState('');
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Body>
          <div className="login">
             <img src={logo} alt="" />
             <p className='heading'>Welcome To Bazaar</p>
             <div className='log-email'>
                <p>Email or Phone Number</p>
                <div className="log-input">
                <input type="text" placeholder='example@mail.com' />
                </div>
                <p>Password</p>
                <div className="log-input">
                   <Password  className='pass' value={value} onChange={(e) => setValue(e.target.value)} toggleMask /> 
                 
                </div> 
             </div>
            
             <button className='lgbtn'>Login</button>
            
                <h5 className='or'>&nbsp;or&nbsp;</h5>
               
             
             <button className='facebook'><img className='im' src={facebook} alt="" />Continue With Facebook</button>
             <button className='google'><img className='im' src={google} alt="" />Continue With Google</button>
             <p>Don't have account? <span className='signtext'>Sign Up</span></p>
             <p>Forgot your password? <span className='passtext'>Reset It</span></p>
           </div>
        </Modal.Body>
       
      </Modal>
    );
  }
  export default Login