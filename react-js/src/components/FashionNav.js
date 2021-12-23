import React from 'react'
import {Navbar,NavbarBrand,NavDropdown,Container, Nav} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {FaBars} from 'react-icons/fa'
const FashionNav = () => {
    return(
        <Navbar collapseOnSelect expand='sm' bg="white"  color="blue" style={{fontSize: "12px",
        padding: "7px 100px", zIndex: 1}} className="fashion-nav">
  <Container style={{backgroundColor: "rgb(233, 232, 232)", padding: "20px 0",
   borderRadius: "20px"}} className="fashion-container">
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav" className="navbar-toggle" style={{padding: "0 130px", marginTop: "-7px"}}>
    <Nav className="me-auto nav-toggle">
      <NavbarBrand>Fashion</NavbarBrand>
      <Nav.Link href="#features"><Button variant="outline-basic" className="btn-sm">Sort By</Button></Nav.Link>
      <Nav.Link href="#GiftCard"><Button className="btn-sm" variant="outline-secondary">Popular</Button></Nav.Link>
      <Nav.Link href="#sell"><Button className="btn-sm" variant="outline-secondary">Lastest</Button></Nav.Link>
      <Nav.Link href="#"><Button className="btn-sm" variant="outline-secondary">Best Selling</Button></Nav.Link>
      <NavDropdown title="price" variant="secondary">
        <NavDropdown.Item>Value</NavDropdown.Item>
      </NavDropdown>
     
    </Nav>
    <Nav style={{display: "flex", justifyContent:"space-between"}} className="nav-toggle">
      <NavbarBrand>View</NavbarBrand>
      <NavbarBrand><FaBars/></NavbarBrand>
      <Nav.Link>SignUp</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default FashionNav