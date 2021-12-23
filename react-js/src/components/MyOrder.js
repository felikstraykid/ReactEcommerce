import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import addy from './../assets/images/aiAddy.jpg'
import koung from './../assets/images/aiKoung.jpg'
import Footer2 from './CopyRight'
import { FaUser, FaClipboardList, FaHeart } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import game from './../assets/images/game.jpg'
import shoes from './../assets/images/shoes.jpg'
import iphone from './../assets/images/iphone.jpg'
import headphone from './../assets/images/headphone.jpg'
const MyOrder = () => {

    return (
        <>
            <TabBar />
            <NavigationBar />
            <div className="container-fluid mt-4" style={{ padding: "1% 14%", borderRadius: "30px" }}>
                <div className="row">
                    <div className="col-sm-3 align-self-start">
                        <div className="bg-light border-white" style={{
                            padding: "5% 10%",
                            height: "100%", borderRadius: "20px"
                        }}>
                            <h4 style={{ fontSize: "15px" }}><img src={addy} width="50px"
                                style={{ borderRadius: "30px", marginRight: "10px" }} />Addy Luangaphai</h4>
                            <p className="align-self-start mt-2 text-info"><FaUser />My Account</p>
                            <p><FaClipboardList />My Order</p>
                            <p className="align-self-start mt-4"><FaHeart />My Wish List</p>
                            <p style={{ color: "rgb(248, 121, 142)" }} className="align-self-start">+ Followed Store</p>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="row text-secondary" style={{ borderBottom: "1px solid lightgrey", margin: "0 20px" }}>
                            <div className="col-sm-2">
                                <p className="text-info">All Orders</p>
                            </div>
                            <div className="col-sm-2">
                                <p>To Pay</p>
                            </div>
                            <div className="col-sm-2">
                                <p>To Ship</p>
                            </div>
                            <div className="col-sm-2">
                                <p>To Receive</p>
                            </div>
                            <div className="col-sm-2">
                                <p>Delivered</p>
                            </div>
                            <div className="col-sm-2">
                                <p>Cancelled</p>
                            </div>
                        </div>
                        <div className="bg-light border-white mt-4 text-secondary" style={{ height: "60%", borderRadius: "20px" }}>

                            <p className="align-self-start" style={{ paddingLeft: "20px", padding: "20px 40px", borderBottom: "1px solid lightgrey" }}>
                                <img src={koung} className="rounded-pill" width="30px" style={{ marginRight: "10px" }} />KTK Shop</p>
                            <div className="container-fluid mt-2">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <a className="mt-3 align-self-start"><img src={game} alt="" width="80%" /></a>
                                    </div>
                                    <div className="col-sm-3 mt-4" style={{ lineHeight: "4px" }}>
                                        <p>Alpha Red Joy Stick</p>
                                        <p>Color: Red</p>
                                    </div>
                                    <div className="col-sm-2 mt-4">
                                        <p>60.000LAK</p>
                                    </div>

                                    <div className="col-sm-2 mt-4">
                                        <p>Qty: 1</p>
                                    </div>
                                    <div className="col-sm-2 mt-4">
                                        <Button className="btn-success btn-sm" variant="outline-light">Delivered</Button>
                                    </div>
                                    <div className="col-sm-1">
                                        <p>On 6 Sep 2021</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-light border-white mt-4 text-secondary" style={{ height: "100%", borderRadius: "20px" }}>

                                <p className="align-self-start" style={{ paddingBottom: "20px",paddingLeft: "40px", borderBottom: "1px solid lightgrey" }}>
                                    <img src={iphone} className="rounded-pill" width="30px" style={{ marginRight: "10px" }} />Xiamie Shop</p>
                                <div className="container-fluid mt-2">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <a className="mt-3 align-self-start"><img src={shoes} alt="" width="80%" /></a>
                                        </div>
                                        <div className="col-sm-3 mt-4" style={{ lineHeight: "4px" }}>
                                            <p>Nike Air jordan</p>
                                            <p>Color: Black/Red</p>
                                        </div>
                                        <div className="col-sm-2 mt-4">
                                            <p>60.000LAK</p>
                                        </div>

                                        <div className="col-sm-2 mt-4">
                                            <p>Qty: 1</p>
                                        </div>
                                        <div className="col-sm-2 mt-4">
                                            <Button className="btn-warning btn-sm" variant="outline-light">To ship</Button>
                                        </div>
                                        <div className="col-sm-1">
                                            <p>On 6 Sep 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="align-self-start" style={{ paddingLeft: "20px", padding: "20px 40px", borderBottom: "1px solid lightgrey" }}>
                                    <img src={iphone} className="rounded-pill" width="30px" style={{ marginRight: "10px" }} />Electro Shop</p>
                                <div className="container-fluid mt-2 mb-4">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <a className="mt-3 align-self-start"><img src={headphone} alt="" width="80%" /></a>
                                        </div>
                                        <div className="col-sm-3 mt-4" style={{ lineHeight: "4px" }}>
                                            <p>ORG Headphone</p>
                                            <p>Color: Orange</p>
                                        </div>
                                        <div className="col-sm-2 mt-4">
                                            <p>320.000LAK</p>
                                        </div>

                                        <div className="col-sm-2 mt-4">
                                            <p>Qty: 1</p>
                                        </div>
                                        <div className="col-sm-2 mt-4">
                                            <Button className="btn-danger btn-sm" variant="outline-light">Cancelled</Button>
                                        </div>
                                        <div className="col-sm-1">
                                            <p>On 3 Sep 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2/>
        </>

    )
}

export default MyOrder