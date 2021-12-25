import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import { Button } from 'react-bootstrap'
import { FaUser, FaClipboardList, FaHeart } from 'react-icons/fa'
import Footer2 from "./Footer2";
import game from './../assets/images/game.jpg'
import addy from './../assets/images/aiAddy.jpg'
const WishList = () => {
  return (
    <>
      <TabBar />
      <NavigationBar />
      <div className="container-fluid mt-4" style={{ padding: "1% 20%", borderRadius: "30px" }}>
        <div className="row">
          <div className="col-sm-3 align-self-start">
            <div className="bg-light border-white" style={{
              padding: "5% 10%",
              height: "190%", borderRadius: "20px"
            }}>
              <p style={{ fontSize: "12px" }}><img src={addy} width="50px"
                style={{ borderRadius: "30px" }} />Addy Luangaphai</p>
              <p className="align-self-start mt-2 text-info"><FaUser />My Account</p>
              <p><FaClipboardList />My Order</p>
              <p className="align-self-start mt-4"><FaHeart />My Wish List</p>
              <p style={{ color: "rgb(248, 121, 142)" }} className="align-self-start">+ Followed Store</p>
            </div>
          </div>
          <div className="col-sm-9">
            <p style={{ textAlign: "left", borderBottom: "2px solid grey" }} className="text-secondary">My Wish List</p>

            <div className="bg-light border-white" style={{ height: "100%", borderRadius: "20px" }}>

              <p className="align-self-start" style={{ paddingLeft: "20px", borderBottom: "1px solid grey" }}>KTK Shop</p>
              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col-sm-2">
                    <a className="mt-3 align-self-start"><img src={game} alt="" width="100%" /></a>
                  </div>
                  <div className="col-sm-4">
                    <p>Alpha Red Joy Stick</p>
                    <p>Color: Red</p>
                  </div>
                  <div className="col-sm-3">
                    <p>60.000LAK</p>
                  </div>

                  <div className="col-sm-3 ml-3">
                    <Button className="btn btn-sm rounded-pill btn-danger" style={{ width: "100%" }}>Add to cart</Button>
                    <Button className="btn btn-sm rounded-pill mt-2" variant="outline-danger" style={{ width: "100%" }}>Delete</Button>
                  </div>
                </div>
              </div>

              <p className="align-self-start" style={{ paddingLeft: "20px", borderBottom: "1px solid grey" }}>Electo Shop</p>
              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col-sm-2">
                    <a className="mt-3 align-self-start"><img src={game} alt="" width="100%" /></a>
                  </div>
                  <div className="col-sm-4">
                    <p style={{ fontSize: "13px" }}>Alpha Red Joy Stick</p>
                    <p>Color: Yellow</p>
                  </div>
                  <div className="col-sm-3">
                    <p>60.000LAK</p>
                  </div>
                  <div className="col-sm-3 justify-content-end">
                    <Button className="btn btn-sm rounded-pill btn-danger" style={{ width: "100%" }}>Add to cart</Button>
                    <Button className="btn btn-sm rounded-pill mt-2" variant="outline-danger" style={{ width: "100%" }}>Delete</Button>
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

export default WishList