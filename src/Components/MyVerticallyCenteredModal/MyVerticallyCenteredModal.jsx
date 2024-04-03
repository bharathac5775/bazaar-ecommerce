
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import google from '../Assets/google.png'
import x from '../Assets/x.png'
import img from '../Assets/girl.png'
import './MyVerticallyCenteredModal.css'

function  MyVerticallyCenteredModal(props) {

    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
     
        <div className="Modal">


          <div className="modal-left">
            <img src={img} alt="" />
          </div>
          <div className="modal-right">
            <h3>UP TO <span>30% OFF</span></h3>
            <h1>Sign up to <span>BAZAAR</span> </h1>
            
              <p>Subscribe to the BAZAAR eCommerce newsletter to recive timely</p>
              <p>updte from your favorite products</p>
           
            <div className="modal-input">
              <input type="text" placeholder='Enter your email address' />
              
            </div>
            <button>SUBMIT</button>
            <did className="modal-contact">
              <img className='im' src={google} alt="" />
              <img className='im' src={instagram} alt="" />
              <img className='im' src={facebook} alt="" />
              <img className='im' src={x} alt="" />
            </did>
          </div>
        </div>
      
    
    </Modal>

     
  );
}
export default MyVerticallyCenteredModal