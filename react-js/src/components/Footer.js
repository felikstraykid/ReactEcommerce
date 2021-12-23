import React from "react";
import qr from './../assets/images/qrcode.png'
import app from './../assets/images/app.png'
import CopyRight from "./CopyRight";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <>
    <Box>
     <h1 className="text-white">Bundo</h1>
      <Container>
        <Row>
          <Column>
            <Heading style={{fontSize: "18px"}}>Help Center</Heading>
            <FooterLink href="#">Orders</FooterLink>
            <FooterLink href="#">Payments</FooterLink>
            <FooterLink href="#">Return and Refund</FooterLink>
            <FooterLink href="#">Delivery</FooterLink>
            <FooterLink>TrackOrders</FooterLink>
          </Column>
          <Column>
            <Heading style={{fontSize: "18px"}}>Get To Know Us
            </Heading>
     
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Sell On Marketo</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading style={{fontSize: "18px"}}>Payment Method</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading style={{fontSize: "18px"}}>Download the App</Heading>
            <FooterLink href="#" className="text-align-center">
              <img src={qr} width="120px"></img>
            </FooterLink>
            <FooterLink href="#">
             
            </FooterLink>
            <FooterLink href="#">
             
            </FooterLink>
            <FooterLink href="#">
             
            </FooterLink>
          </Column>
        </Row>
       
      </Container>
     
    </Box>
   
  
  </>
     
  );
};





export default Footer;