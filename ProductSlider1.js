import React from 'react'
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import pant from './../assets/images/pant.jpg'
import cap from './../assets/images/cap.jpg'
import bag from './../assets/images/bag.jpg'
import phone from './../assets/images/phone.jpg'
import girl from './../assets/images/girl.jpg'
import { FaShoppingCart } from 'react-icons/fa'


const ProductSlide = () => {
    return (
        <>
        <InfiniteCarousel breakpoints={[
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    sideSize: .1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidersToShow: 4,
                    slidesToScroll: 1,
                    sideSize: .1,
                },
            },
        ]}
            dots={false}
            showSides={true}
            sidesOpacity={.1}
            sideSize={.9}
            slidesToScroll={1}
            slidesToShow={6}
            scrollOnDevice={true}

        >

            <div>
                <img src={pant} style={{ borderRadius: "30px", height: "230px", width: "150px"}}/>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>Pant</p>
                    <p className="text-warning text-bold">35.000LAK <FaShoppingCart /></p>
                    <p><strike>70.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={cap} style={{ borderRadius: "30px", height: "230px", width: "150px"}}/>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>Pant</p>
                    <p className="text-warning text-bold">35.000LAK <FaShoppingCart /></p>
                    <p><strike>70.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={bag} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>Bag</p>
                    <p className="text-warning text-bold">60.000LAK <FaShoppingCart /></p>
                    <p><strike>100.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={phone} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>Huawei Y10</p>
                    <p className="text-warning text-bold">1.550.000LAK <FaShoppingCart /></p>
                    <p><strike>2.100.000LAK</strike></p>
                </div>
            </div>
      
            <div>
                <img src={girl} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>Wacrao Bra</p>
                    <p className="text-warning text-bold">50.000LAK <FaShoppingCart /></p>
                    <p><strike>70.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={pant} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>ADUL CCTV</p>
                    <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                    <p><strike>1.700.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={girl} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>ADUL CCTV</p>
                    <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                    <p><strike>1.700.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={phone} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>ADUL CCTV</p>
                    <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                    <p><strike>1.700.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={cap} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>ADUL CCTV</p>
                    <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                    <p><strike>1.700.000LAK</strike></p>
                </div>
            </div>

            <div>
                <img src={bag} style={{ borderRadius: "30px", height: "230px", width: "150px"}}></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                    <p>ADUL CCTV</p>
                    <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                    <p><strike>1.700.000LAK</strike></p>
                </div>
            </div>


        </InfiniteCarousel>
        </>
        )
}

export default ProductSlide