import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import Banner from './Banner.js'
import { Navbar} from 'react-bootstrap'
import JustForYou from './JustForYou'
import LoadMore from './LoadMoreBtn'
import {Container, Nav} from 'react-bootstrap'
import Footer2 from './CopyRight'
import {
    FaAngleRight, FaHeart, FaStar,
    FaWhatsapp, FaWeixin, FaTwitter, FaInstagram, FaShoppingCart, FaFacebook, FaTruck, FaMoneyBill, FaUser, FaMapMarkedAlt
} from 'react-icons/fa'
import game from './../assets/images/game.jpg'
import { Button } from 'react-bootstrap'
import Banner1 from './Banner1'
import NavList from './navList'
import koung from './../assets/images/aiKoung.jpg'

const ProductPage = () => {
    return (
        <>
            <TabBar />
            <NavigationBar />
            <Banner />
            <Navbar style={{
                backgroundColor: "white", width: "100%",
                fontSize: "13px", position: "absolute", paddingLeft: "17%", top: "55%"
            }} className="mt-4">
                <Nav.Link>Home <FaAngleRight /></Nav.Link>
                <Nav.Link>Electronic and Accessories</Nav.Link>
            </Navbar>

            <div style={{ padding: "0 10%" , position: "absolute" , top:"70%"}}>
                <div className="row">
                    <div className="col-sm-5">
                        <img src={game} width="100%" style={{ borderRadius: "20px" }}></img>
                    </div>
                    <div className="col-sm-4 bg-light" style={{ borderRadius: "20px" }}>
                        <h4 className="text-secondary">Alpha Red Joy Stick<FaHeart /></h4>
                        <ul className="star">
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                        </ul>
                        <Button variant="outline-success" className="btn-sm rounded-pill">In Stock</Button>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam magni sit, nobis voluptatum eius .</p>
                        <h3 className="text-warning">60.000LAK</h3>
                        <strike className="text-secondary">100.000LAK</strike>
                        <ul className="star">
                            <li>Color:</li>
                            <li>Blue</li>
                            <li>Orange</li>
                            <li>Pink</li>
                        </ul>
                        <div className="row">
                            <div className="col-sm-1">-</div>
                            <div className="col-sm-1">1</div>
                            <div className="col-sm-1">+</div>
                            <div className="col-sm-5">
                                <Button className="btn-sm">Add to Cart</Button>
                            </div>
                            <div className="col-sm-4">
                                <Button className="btn-sm btn-warning">Buy Now</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="star text-align-start mt-2">
                                    <li>share</li>
                                    <li><FaFacebook /></li>
                                    <li><FaWhatsapp /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaWeixin /></li>
                                    <li><FaTwitter /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 bg-light">
                       <div className="card">
                           
                       </div>
                    </div>
                </div>

            </div>
            <Navbar>
         <Container style={{margin: "0 20%", marginTop: "15%",borderBottom: "1px solid grey"}} className="nav-link">
            <Navbar.Brand className="des">Product Description</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <a href="#login" className="seeAll">SEE ALL</a>
            </Nav.Link>
         </Navbar.Collapse>
         </Container>
      </Navbar>
            <div className="container" style={{ padding: "0 10%" }}>
                <div className="row">
                    <div className="col-sm-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veniam magni sit, nobis voluptatum eius voluptatem ullam, aspernatur voluptate ab a sed molestias placeat id deleniti? Atque pariatur reprehenderit soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus velit praesentium cum inventore qui. Itaque fugiat autem, totam adipisci cumque molestiae incidunt quis natus perspiciatis facere soluta consequatur error illum.</p>
                    </div>
                </div>
            </div>
            <NavList title="From the same store"/>
            <JustForYou/>
            <LoadMore/>
            <Banner1/>
            <Footer2/>
        </>
    ) 
}

export default ProductPage