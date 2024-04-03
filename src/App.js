import React, { useState } from 'react'
import './App.css';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Hero2 from './Components/Hero2/Hero2';
import Menu from './Components/Menu/Menu';
import MyVerticallyCenteredModal from './Components/MyVerticallyCenteredModal/MyVerticallyCenteredModal';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Components/Details/Details';
import Cartpage from './Components/Cartpage/Cartpage';
import Payment from './Components/Payment/Payment';
import Productpage from './Components/Productpage/Productpage';
import cart1 from './Components/Assets/pant.png'
import cart2 from './Components/Assets/watch.png'
import cart3 from './Components/Assets/shirt.png'
import cart4 from './Components/Assets/nike.png'
import Pagination1 from './Components/Pagination1/Pagination1';

// import Carousel from "react-bootstrap/Carousel"

function App() {
  const [modalShow, setModalShow] = useState(true);
  const [showhero,setshowhero]=useState(1);
  const[showproduct,setshowproduct]=useState(0);
  const [showcart,setshowcart]=useState(0);
  const [showdetails,setshowdetails]=useState(0);
  const [showpayment,setshowpayment]=useState(0);
  const [showpagination,setshowpagination]=useState(0);
  
  const cart=[
    {
      name:"Nike shoe",
      quantity:1,
      price:1800,
      image:cart4
    },
    {
      name:"Puma Pant",
      quantity:5,
      price:200,
      image:cart1
    },
    {
      name:"Titan Watch",
      quantity:1,
      price:1500,
      image:cart2
    },
    {
      name:"Puma Shirt",
      quantity:3,
      price:500,
      image:cart3
    }
];

  return (
    <div>
      <MyVerticallyCenteredModal
     show={modalShow}
     onHide={() => setModalShow(false)}
   />
     <Contact/>
     <Navbar cart20={cart} setProduct={setshowproduct} setCart={setshowcart} setContent={setshowhero}/>
     <Menu showpagination={setshowpagination} showhero={setshowhero}/>
     {
      showhero?<Hero2 click20={setshowproduct} click30={setshowhero}/>:""
     }
     {
      showproduct?<Productpage/>:""
     }
     {
      showcart?<Cartpage showdetails={setshowdetails} showcart={setshowcart} cart20={cart}/>:""
     }
     {
      showdetails? <Details showdetails={setshowdetails} showcart={setshowcart} showpayment={setshowpayment}  />:""
     }
     {
      showpayment ? <Payment showdetails={setshowdetails} showpayment={setshowpayment} showpagination={setshowpagination} />:""
     }
     {
      showpagination ?<Pagination1/>:""
     }

    </div>
  );
}

export default App;
