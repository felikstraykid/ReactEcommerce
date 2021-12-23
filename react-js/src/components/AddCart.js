import React from 'react'
import {CloseButton} from 'react-bootstrap'
import {FaCheckCircle} from 'react-icons/fa'
import game from './../assets/images/game.jpg'
import { Button } from 'react-bootstrap'
import './AddCart.css'
const Addcart = () => {
    return(
        <body style={{backgroundColor: "grey"}}>
        <div className="container">
           <div className="row" style={{padding: "10% 20%"}}>
              
              <div className="col-sm-12" style={{backgroundColor: "white",borderRadius: "30px", textAlign: "center"}}>
              <CloseButton style={{position: "relative", top: "0", left: "57%"}}/>
                <FaCheckCircle size="20%" className="mt-4" color="aqua"/>
                <div className="row">
                   <div className="col-sm-12 mt-3">
                     <h5>An Item has been added to cart</h5>
                   </div>    
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={game} width="100%"></img>
                    </div>
                    <div className="col-sm-3 mt-5">
                        <p>Alpha Red Joy Stick</p>
                        <p>Color : Yellow</p>
                    </div>
                    <div className="col-sm-3 mt-5">
                        <p>Qty: 1</p>
                    </div>
                    <div className="col-sm-3 mt-5">
                        <p>60.000LAk</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Button style={{width: "80%"}} className="btn-info" variant="outline-light">View Cart</Button>
                    </div>
                    <div className="col-sm-6">
                        <Button style={{width: "80%"}} className="btn-warning" variant="outline-light">Check Out</Button>
                    </div>
                </div>
              </div>
           </div>
          
        </div>
        </body>
    )
}

export default Addcart