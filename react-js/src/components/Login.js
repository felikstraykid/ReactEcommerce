import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import { Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Footer2 from './CopyRight'
import { Link } from 'react-router-dom'
const Login = () =>{
    return(
        <>
        <TabBar/>
        <NavigationBar/>
        <Form>
            <Form.Group style={{padding: "10% 35%", textAlign: "center"}} className="text-secondary">
                <Form.Label className="text-info">Login</Form.Label>
                <Form.Label style={{marginLeft: "17%"}}><Link to="/SignUp"
                style={{textDecoration: "none", color:"grey"}}>Sign Up</Link></Form.Label>
                <Form.Control type="email" placeholder="UserName/Email/Phone Number" size="sm"
                style={{borderRadius: "30px"}} className="mt-4"></Form.Control>
                <Form.Control placeholder="Password" type="password"
                size="sm" style={{borderRadius: "30px"}}
                className="mt-4"></Form.Control>
                   <Form.Group style={{textAlign: "right", color: "aqua", fontSize: "13px"}}>
            <Form.Label>Forgot Password</Form.Label>
                </Form.Group>
                <Button className="btn-warning btn-sm" variant="outline-light"
                style={{width: "100%", borderRadius: "30px"}}>Login</Button>
                <Button className="btn-primary btn-sm mt-3" variant="outline-light"
                style={{width: "100%", borderRadius: "30px"}}>Login With Facebook</Button>
                <Button className="btn-danger btn-sm mt-3" variant="outline-light"
                style={{width: "100%", borderRadius: "30px"}}>Login with Google</Button>
            </Form.Group>
         
           
        </Form>
        <Footer2/>
        </>
    )
}

export default Login