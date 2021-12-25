import React from 'react'
import { Form , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import Footer2 from './Footer2'
const SignupEmail = () => {
    return(
        <>
        <TabBar/>
        <NavigationBar/>
         <Form>
            <Form.Group style={{padding: "10% 35%", textAlign: "center"}} className="text-secondary">
                <Form.Label><Link to="/Login" style={{textDecoration: "none", color: "grey"}}>Login</Link></Form.Label>
                <Form.Label style={{marginLeft: "10%"}} className="text-info">Sign Up</Form.Label>
                <Form.Control placeholder="User name/ Email / Phone Number" size="sm" type="email"
                style={{borderRadius: "30px"}} className="mt-4"></Form.Control>
                <Form.Control placeholder="Password" type="password"
                size="sm" style={{borderRadius: "30px"}}
                className="mt-4"></Form.Control>
                   <Form.Group style={{textAlign: "right", color: "aqua", fontSize: "13px"}}>
            <Form.Label>Forgot Password</Form.Label>
                </Form.Group>
                <Button className="btn-warning btn-sm" variant="outline-light"
                style={{width: "100%", borderRadius: "30px"}}>Sign Up</Button>
                <Form.Label className="text-info mt-3"><Link to="/SignUpEmail"
                style={{textDecoration: "none", color: "grey"}}>Sign Up with Phone Number</Link></Form.Label>
            </Form.Group>
        </Form>
        <Footer2/>
        </>
    )
}

export default SignupEmail