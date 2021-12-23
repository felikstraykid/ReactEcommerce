import React from 'react'
import CopyRight from "./CopyRight";
import Footer from './Footer';
import qr from './../assets/images/qrcode.png'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";


const Footer2 = () => {
    return(
        <>
       <footer className="text-center text-lg-start bg-info text-white">
  
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <button className="mt-3 btn-outline-light btn-info btn-lg text-white" type="button">LOGO</button>
   
      <div className="row mt-3">
      
        

        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-3">
            
         
          <h6 className="text-uppercase fw-bold mb-4">
            Help Center
          </h6>
          <p>Orders</p>
          <p>Payment</p>
          <p>Return  Refunds</p>
          <p>Delivery</p>
          <p>Payment</p>
          <p>Trackorder</p>
        </div>
     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Get to know us
          </h6>
          <p>
            <a className="text-reset">About Us</a>
          </p>
          <p>
            <a  className="text-reset">Sell on Marketo</a>
          </p>
          <p>
            <a  className="text-reset">Contact Us</a>
          </p>
        </div>
        

    
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3">
       
          <h6 className="text-uppercase fw-bold mb-4">
            Payment Methods
          </h6>
          <p>
            <a className="text-reset">Pricing</a>
          </p>
          <p>
            <a  className="text-reset">Settings</a>
          </p>
          <p>
            <a  className="text-reset">Orders</a>
          </p>
          <p>
            <a  className="text-reset">Help</a>
          </p>
        </div>
      
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-3">
         
          <h6 className="fw-bold mb-4">
            Download the App
          </h6>
          
          <img src={qr} width="140px"/>
        </div>
        
      </div>
 
    </div>
  </section>


</footer>

 
  <div className="text-center p-4" style={{backgroundColor: "rgba(218, 213, 213, 0.884)"}}>
   <span>Copyright 2021 All right Reserve</span>
   <span style={{marginLeft: "900px"}}>Follow us:</span>
    </div>
    
      </>
    );
};

export default Footer2