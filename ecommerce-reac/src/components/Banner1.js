import React from 'react'
import banner from './../assets/images/Banner_02.jpg'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Banner1 = () => {
    return(
        <Container>
            <Row>
                <Col className="text-center mt-5">
                    <div>
                    <img src={banner} width="70%"/>
                   </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner1