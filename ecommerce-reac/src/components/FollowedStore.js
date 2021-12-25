import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import { Button } from 'react-bootstrap'
import game from './../assets/images/game.jpg'
import { FaUser, FaClipboardList, FaHeart } from 'react-icons/fa'
import addy from './../assets/images/aiAddy.jpg'
import Footer2 from './Footer2'
const Followstore = () => {
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
            <p style={{ textAlign: "left", borderBottom: "2px solid grey" }} className="text-secondary">Followed Store</p>

            <div className="bg-light border-white" style={{ height: "100%", borderRadius: "20px" }}>

              <p className="align-self-start" style={{ paddingLeft: "20px", borderBottom: "1px solid grey" }}>KTK Shop</p>
              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col-sm-2">
                    <a className="mt-3 align-self-start"><img src={game} alt="" width="100%" /></a>
                  </div>
                  <div className="col-sm-2">
                    <img src={game} alt="" width="100%" />

                  </div>
                  <div className="col-sm-2">
                    <img src={game} alt="" width="100%" />
                  </div>
                  <div className="col-sm-2">
                    <img src={game} alt="" width="100%" />
                  </div>
                  <div className="col-sm-4 ml-4">
                    <Button className="btn btn-sm rounded-pill" variant="outline-danger" style={{ width: "100%" }}>Followed</Button>
                    <Button className="btn btn-sm rounded-pill mt-2" variant="outline-warning" style={{ width: "100%" }}>Visit Shop</Button>
                  </div>
                </div>
              </div>

              <p className="align-self-start" style={{ paddingLeft: "20px", borderBottom: "1px solid grey" }}>Electo Shop</p>
              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col-sm-2">
                    <a className="mt-3 align-self-start"><img src={game} alt="" width="100%" /></a>
                  </div>
                  <div className="col-sm-2">
                    <img src={game} alt="" width="100%" />

                  </div>
                  <div className="col-sm-2">
                    <img src={game} alt="" width="100%" />
                  </div>
                  <div className="col-sm-2">
                    <img src={game} width="100%" />
                  </div>
                  <div className="col-sm-4">
                    <Button className="btn btn-sm rounded-pill" variant="outline-danger" style={{ width: "100%" }}>Followed</Button>
                    <Button className="btn btn-sm rounded-pill mt-2" variant="outline-warning" style={{ width: "100%" }}>Visit Shop</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  )
}



export default Followstore