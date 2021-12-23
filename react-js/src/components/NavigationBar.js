import React from "react";
import {Navbar,NavbarBrand,Container, Nav, Button , Popover,OverlayTrigger} from 'react-bootstrap'
import { FaDownload} from "react-icons/fa"
import { Link } from 'react-router-dom'
const popover = (
  <Popover id="popover-basic" className="rounded border-white">
    
    <Popover.Body>
      <h4 className="text-warning mt-4">Track order</h4>
      <p className="text-secondary">Please enter your order number</p>
      <input placeholder="Order number" className="rounded-pill border-light" 
      style={{width: "100%"}}></input>
      <Button className="btn-warning btn-sm rounded-pill mt-3 mb-4" 
      style={{width: "100%"}} variant="outline-light">Track Order</Button>
    </Popover.Body>
  </Popover>
);
const NavigationBar = () => {

    return(
        <Navbar collapseOnSelect expand='sm' bg="white"  color="blue" style={{fontSize: "12px", zIndex: 1}}>
  <Container>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav" className="navbar-toggle" style={{padding: "0 130px", marginTop: "-19px"}}>
    <Nav className="me-auto nav-toggle mt-3">
      <Nav.Link href="#features">Promotion</Nav.Link>
      <Nav.Link href="#GiftCard"><Link to="/Qrcode"
      style={{textDecoration: "none", color: "grey"}}>GiftCard</Link></Nav.Link>
      <Nav.Link href="#sell">SellOnBundoe</Nav.Link>
      <Nav.Link href="#">  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <p className="text-secondary">Track Order</p>
  </OverlayTrigger></Nav.Link>
     
    </Nav>
    <Nav style={{display: "flex", justifyContent:"space-between", textDecoration: "none"}} className="nav-toggle">
      <Nav.Link>DownloadApp</Nav.Link>
      <Nav.Link><Link to="/Login" style={{textDecoration: "none", color: "grey"}}> Login</Link></Nav.Link>
      <Nav.Link><Link to="/SignUp" style={{textDecoration: "none", color: "grey"}}>SignUp</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavigationBar
