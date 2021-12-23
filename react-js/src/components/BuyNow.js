import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import game from './../assets/images/game.jpg'
import {Navbar,NavbarBrand,Container, Nav} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {FaTrash, FaMapMarkedAlt} from 'react-icons/fa'
import Banner1 from './Banner1'
import Footer2 from './CopyRight'
const BuyNow = () => {
    return(
        <>
        <TabBar/>
        <NavigationBar/>
        <Navbar style={{backgroundColor: "rgb(233, 232, 232)", color: "grey",fontSize: "13px", paddingLeft: "18%"}}>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Check Out</Nav.Link>
        </Navbar>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="text-warning">Cart</h1>
                </div>
            </div>
            <div className="row text-secondary">
                <div className="col-sm-9">
                    <div className="row bg-light mt-4" style={{borderRadius: "30px"}}>
                        <div className="col-sm-3 mt-3">
                            <p>Select All</p>
                        </div>
                        <div className="col-sm-2 mt-3">
                            <p>Product</p>
                        </div>
                        <div className="col-sm-2 mt-3">
                            <p>Unit Price</p>
                        </div>
                        <div className="col-sm-2 mt-3">
                            <p>Quantity</p>
                        </div>
                        <div className="col-sm-3 mt-3">
                            <p>Total Price</p>
                        </div>
                    </div>
                    <div className="row mt-4" style={{borderBottom: "1px solid grey"}}>
                        <div className="col-sm-3">
                            <img src={game} width="50%"></img>
                        </div>
                        <div className="col-sm-2 mt-3">
                            <p>Alpha Red Joy stick</p>
                            <p>Color: Yellow</p>
                        </div>
                        <div className="col-sm-2 mt-4">
                            <p>60.000LAK</p>
                        </div>
                        <div className="col-sm-2 mt-4">
                            <p>1</p>
                        </div>
                        <div className="col-sm-2 mt-4">
                            <p>60.000LAK</p>
                        </div>
                        <div className="col-sm-1 mt-4">
                            <FaTrash/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mt-4">
                            <input placeholder="Coupon code" className="bg-light rounded-pill" style={{border: "none", height: "40px"}}/>
                            <Button className="bg-info rounded-pill" variant="outline-light">Apply Coupon</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 bg-light mt-4 text-secondary" style={{borderRadius: "30px"}}>
                    <div className="row">
                        <div className="col-sm-10 mt-3">
                            <p>Select Shipping Address</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                        <select className="rounded" variant="outline-light" style={{
                                height: "40px",border: "none", width: "100%"}}>
                                <option>DongDok, Xaythany, Vientiane Capital</option>
                                <option>Phaxay, Sisattank, Vientiane Capital</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mt-3">
                            <p>Select Delivery Services</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <select className="rounded" variant="outline-light" style={{borderRadius: "10px", border: "none" ,width: "100%", height: "40px"}}>
                                <option>HAL Logic</option>
                                <option>Mixay</option>
                                <option>ANS express</option>
                                <option>Kiengkai</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mt-3">
                            <p>Select Payment Method</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <select variant="outline-light" style={{borderRadius: "10px", border: "none", width: "100%", height: "40px"}}>
                                <option>Visa</option>
                                <option>BCEL One</option>
                                <option>Adv cash</option>
                            </select>
                        </div>
                    </div>
                 
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <p>Sub Total:</p>
                        </div>
                        <div className="col-sm-6">
                            <p>60.000LAK</p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-6">
                            <p>Shipping fee</p>
                        </div>
                        <div className="col-sm-6">
                            <p>0LAK</p>
                        </div>
                    </div>
                    <div className="row mt-2 mb-4">
                        <div className="col-sm-6">
                            <h5>Total:</h5>
                        </div>
                        <div className="col-sm-6">
                            <h5 className="text-warning">60.000LAK</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 mb-4">
                            <Button className="btn-warning rounded-pill" 
                            variant="outline-light" style={{width:"100%"}}>Proceed to check out</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Banner1/>
        <Footer2/>
        </>
    )
}

export default BuyNow