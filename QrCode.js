import React from 'react'
import './Qr.css'
import bootstrap from "bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Onepay from './../assets/images/onepay.png'
import { Card } from 'react-bootstrap'
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'
import qr from './../assets/images/qrcode.png'
import { CloseButton} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Qrcode = () => {
    return(
  
        <Container>
        <Row>
            <Col>
            <div style={{width: "50%", backgroundColor: "grey", borderRadius: "30px", textAlign: "center",
        marginTop: "15%", height: "66%", marginLeft: "25%"}}>
            
                 <img src={Onepay} width="100px"/>
                 <Link to="/"><CloseButton style={{position: "relative", left: "30%"}}/></Link>
                 <h4>Please scan Qr code to pay</h4>
                 <img src={qr} width="140px"></img>
                 <p className="text-danger">Amount: 60.000LAK</p>
              </div>
            </Col>
        </Row>            
    </Container>

    );
}

export default Qrcode