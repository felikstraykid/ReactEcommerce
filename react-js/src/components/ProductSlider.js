import React from 'react'
import Carousel from 'react-grid-carousel'
import macbook1 from './../assets/images/macbook1.jpg'

import tv from './../assets/images/tv.jpg'
import vr from './../assets/images/vr.jpg'
import sofa from './../assets/images/sofa.jpg'
import shoes from './../assets/images/shoes.jpg'
import shirt from './../assets/images/shirt.jpg'
import phone from './../assets/images/phone.jpg'
import securitycamera from './../assets/images/security-camera.jpg'
import { FaShoppingCart } from 'react-icons/fa'

import styled from 'styled-components'
const Card = styled.div`
  position: relative;
  img {
    width: 150px;
    height: 150px;

    object-fit: cover;
    border-radius: 8px;
   
  }
  span:first-of-type {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  span:last-of-type {
    color: gray;
    font-size: 12px;
    text-decoration-line: line-through;
    margin-left: 10px;
  }
  @media screen and (max-width: 467px) {
  
     div p{
       font-size: 10px;
     }
    
  }
`

const Gallery = () => {
  return (
    <div className="div">
      <Carousel cols={4} rows={2} gap={20} loop>

        <Carousel.Item>
          <Card>
            <div>
              <img src={sofa} style={{borderRadius: "30px"}} bg="info" />
              <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
                <p>KTK Sofa</p>
                <p className="text-warning text-bold">5.500.000LAK <FaShoppingCart /></p>
                <p><strike>6.000.000LAK</strike></p>
              </div>
            </div>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={securitycamera} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "134px" }}>
              <p>ADUL CCTV</p>
              <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
              <p><strike>1.700.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={phone} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={shoes} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={shirt} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>White T-shirt</p>
              <p className="text-warning text-bold">15.000LAK <FaShoppingCart /></p>

            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={shoes} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>Wining Sneaker</p>
              <p className="text-warning text-bold">35.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={tv} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>Mi Tv 50</p>
              <p className="text-warning text-bold">3.500.000LAK <FaShoppingCart /></p>
              <p><strike>4.000.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={phone} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={vr} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={tv} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={sofa} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={tv} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={sofa} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={securitycamera} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "134px" }}>
              <p>ADUL CCTV</p>
              <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
              <p><strike>1.700.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={phone} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={securitycamera} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "134px" }}>
              <p>ADUL CCTV</p>
              <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
              <p><strike>1.700.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <img width="150px" height="150px" style={{ borderRadius: "30px" }} src={phone} />
            <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "10px", width: "134px" }}>
              <p>ZTZ Mobile Case</p>
              <p className="text-warning text-bold">20.000LAK <FaShoppingCart /></p>
              <p><strike>30.000LAK</strike></p>
            </div>
          </Card>
        </Carousel.Item>

        {/* ... */}
      </Carousel>

    </div>

  )
}
export default Gallery