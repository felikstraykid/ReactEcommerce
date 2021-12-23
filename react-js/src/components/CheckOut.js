import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import {Navbar,NavbarBrand,Container, Nav} from 'react-bootstrap'
import { FaCheckCircle } from "react-icons/fa"
import { Button } from 'react-bootstrap'
import Footer2 from './CopyRight'
import Footert from './Footer'
import { Link } from 'react-router-dom'
const CheckOut = () => {
    return(
        <>
        <TabBar/>
        <NavigationBar/>
        <Navbar style={{backgroundColor: "rgb(233, 232, 232)", color: "grey",fontSize: "13px", paddingLeft: "18%"}}>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Check Out</Nav.Link>
        </Navbar>
        <div style={{textAlign: "center", marginTop: "10%"}}>
           <FaCheckCircle color="aqua" fontSize="14vh"/>
            <h1 className="text-secondary mt-4">Your Order has been succeed</h1>
            <p className="text-secondary">OrderId: 5608 5947 5080</p>
            <p className="text-secondary">Date: 03/09/2021</p>
            <Link to="/"><Button className="btn-md text-white outline-warning"
             variant="warning" style={{borderRadius: "20px"}}>Back to Shipping</Button></Link>
        </div>
        <Footer2/>
        
        </>
    )
}

export default CheckOut