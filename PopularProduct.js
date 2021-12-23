import React from 'react'

import InfiniteCarousel from 'react-leaf-carousel';
import { FaShoppingCart } from 'react-icons/fa'
import headphone from './../assets/images/headphone.jpg'
import wristband from './../assets/images/wristband.jpg'
import chair from './../assets/images/chair.jpg'
import tv from './../assets/images/tv.jpg'

import lotion from './../assets/images/lotion.jpg'

const PopularProduct = () => {
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
                    <img src={headphone} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>Spin Headphone</p>
                        <p className="text-warning text-bold">35.000LAK <FaShoppingCart /></p>
                        <p><strike>70.000LAK</strike></p>
                    </div>
                    
                </div>

                <div>
                    <img src={wristband} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>Cap</p>
                        <p className="text-warning text-bold">12.000LAK <FaShoppingCart /></p>
                        <p><strike>30.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={chair} style={{
                        borderRadius: "30px", width: "150px", height: "230px"
                    }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>Bag</p>
                        <p className="text-warning text-bold">60.000LAK <FaShoppingCart /></p>
                        <p><strike>100.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={tv} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>Huawei Y10</p>
                        <p className="text-warning text-bold">1.550.000LAK <FaShoppingCart /></p>
                        <p><strike>2.100.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={lotion} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>Wacrao Bra</p>
                        <p className="text-warning text-bold">50.000LAK <FaShoppingCart /></p>
                        <p><strike>70.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={headphone} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>ADUL CCTV</p>
                        <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                        <p><strike>1.700.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={headphone} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>ADUL CCTV</p>
                        <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                        <p><strike>1.700.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={tv} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>ADUL CCTV</p>
                        <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                        <p><strike>1.700.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={lotion} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>ADUL CCTV</p>
                        <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                        <p><strike>1.700.000LAK</strike></p>
                    </div>
                </div>

                <div>
                    <img src={wristband} style={{ borderRadius: "30px", width: "150px", height: "230px" }}></img>
                    <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "8px", bottom: "6px", borderRadius: "8px", width: "135px" }}>
                        <p>ADUL CCTV</p>
                        <p className="text-warning text-bold">1.000.000LAK <FaShoppingCart /></p>
                        <p><strike>1.700.000LAK</strike></p>
                    </div>
                </div>

            </InfiniteCarousel>
        </>
    );
}


export default PopularProduct