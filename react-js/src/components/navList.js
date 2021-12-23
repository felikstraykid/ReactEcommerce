import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Nav} from 'react-bootstrap'
import {FaAngleRight} from 'react-icons/fa'
const NavList = (props) => {
   return(
      <>
      <Navbar>
         <Container style={{margin: "5% 10%", borderBottom: "1px solid grey"}} className="nav-link">
            <Navbar.Brand className="des">{props.title}</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <a href="#login" className="seeAll">SEE ALL</a>
            </Nav.Link>
         </Navbar.Collapse>
         </Container>
      </Navbar>
      </>
   )
}


export default NavList;