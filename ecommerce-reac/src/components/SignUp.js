import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Footer2 from './Footer2'
const Signup = () => {
    return(
        <>
        <TabBar/>
        <NavigationBar/>
        <Form>
            <Form.Group style={{padding: "10% 35%", textAlign: "center"}} className="text-secondary">
                <Form.Label><Link to="/Login" style={{textDecoration: "none", color: "grey"}}>Login</Link></Form.Label>
                <Form.Label style={{marginLeft: "10%"}} className="text-info">Sign Up</Form.Label>
                <Form.Control placeholder="Phone Number" size="sm"
                style={{borderRadius: "30px"}} className="mt-4"></Form.Control>
                <Form.Control placeholder="Verication Code"
                size="sm" style={{borderRadius: "30px"}}
                className="mt-4"></Form.Control>
                   <Form.Group style={{textAlign: "right", color: "aqua", fontSize: "13px"}}>
            <Form.Label>Forgot Password</Form.Label>
                </Form.Group>
                <Button className="btn-warning btn-sm" variant="outline-light"
                style={{width: "100%", borderRadius: "30px"}}>Sign Up</Button>
                <Form.Label className="text-info mt-3"><Link to="/SignUpEmail"
                style={{textDecoration: "none", color: "grey"}}>Sign Up with Email</Link></Form.Label>
            </Form.Group>
        </Form>
        <Footer2/>
        </>
    )
}

export default Signup