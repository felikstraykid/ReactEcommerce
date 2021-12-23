import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import { FaUser, FaClipboardList, FaHeart} from 'react-icons/fa'
import addy from './../assets/images/aiAddy.jpg'
import { Button } from "react-bootstrap"
import Footer2 from './CopyRight'
const Account = () => {
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
                            <p style={{ fontSize: "12px" }}><img src={addy} width="50px"
                                style={{ borderRadius: "30px" }}/>Addy Luangaphai</p>
                            <p className="align-self-start mt-2 text-info"><FaUser />My Account</p>
                            <p><FaClipboardList />My Order</p>
                            <p className="align-self-start mt-4"><FaHeart />My Wish List</p>
                            <p style={{ color: "rgb(248, 121, 142)" }} className="align-self-start">+ Followed Store</p>
                        </div>
                    </div>
                    <div className="col-sm-9">
                       <div className="row text-secondary" style={{borderBottom: "1px solid grey"}}>
                           <div className="col-sm-3">
                               <p className="text-info">My Infomation</p>
                           </div>
                           <div className="col-sm-3">
                               <p>Address</p>
                           </div>
                           <div className="col-sm-3">
                               <p>Payment</p>
                           </div>
                           <div className="col-sm-3">
                               <p>Password</p>
                           </div>
                       </div>
                       <div className="container mt-4 bg-light text-secondary" style={{borderRadius: "30px"}}>
                           <div className="row">
                               <div className="col-sm-4 mt-4">
                                   <p>User Name</p>
                                   <p>Email</p>
                                   <p>Phone Number</p>
                                   <p>Gender</p>
                                   <p>Birth Date</p>
                               </div>
                               <div className="col-sm-4 mt-4">
                                   <p>Addy Luangaphai</p>
                                   <p>addy@gmail.com</p>
                                   <p>+856205564872</p>
                                   <p>Male</p>
                                   <p>23/03/1993</p>
                               </div>
                               <div className="col-sm-4 mt-4">
                                   <img src={addy} width="70%" height="auto" className="rounded-pill"></img>
                                   <p>Change Photo</p>
                               </div>
                           </div>
                           <div className="row mt-4">
                            
                                   <Button className="btn-warning btn-md rounded-pill" variant="outline-light">Edit Profile</Button>
                         
                           </div>
                       </div>
                    </div>
                </div>
            </div>
            <Footer2/>
        </>
    )
}

export default Account