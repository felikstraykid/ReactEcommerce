import React from 'react'
import {Button} from 'react-bootstrap'
import bootstrap from "bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const LoadMore = () =>{
    return(
     <Container>
         <Row>
             <Col className="text-center mt-5" sm={12}>
             <Button variant="outline-info" className="btn-sm"
              style={{width: "20%", borderRadius: "20px"}}>LOAD MORE</Button>
             </Col>
         </Row>
     </Container>


    )
}

export default LoadMore