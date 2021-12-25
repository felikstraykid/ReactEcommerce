import React from "react"

import image1 from './../assets/images/Banner_01.jpg'
import image2 from './../assets/images/Banner_03.jpg'
import image3 from './../assets/images/Banner_04.jpg'
import image4 from './../assets/images/Banner_05.jpg'
import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {

  const settings = {
    dots: true,
    infinite: true,

    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          appendDots: dots => (
            <div style={{
              backgroundColor: "none",
              borderRadius: "10px", padding: "2px", position: "absolute", top: "34%", right: "3%"
            }}>
              <ul>{dots}</ul>
            </div>
          ),
          customPaging: i => (
            <div style={{
              width: "8px", height: "8px",
              margin: "5px 0", color: "aqua", borderRadius: "50%", backgroundColor: "grey",
            }}></div>
          )


        }
      }
    ],
    appendDots: dots => (
      <div style={{
        backgroundColor: "none",
        borderRadius: "10px", padding: "2px", position: "absolute", top: "34%", right: "3%"
      }}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div style={{
        width: "14px", height: "14px",
        margin: "31px 0", color: "aqua", borderRadius: "50%", backgroundColor: "aqua",
      }}></div>
    )


  };
  return (
    <div>

      <Slider {...settings} style={{ textAlign: "center" }} className="banner-slide">
        <div>
          <img src={image1} width="100%" ></img>

        </div>
        <div>
          <img src={image2} width="100%"></img>
        </div>
        <div>
          <img src={image3} width="100%"></img>
        </div>
        <div>
          <img src={image4} width="100%"></img>
        </div>

      </Slider>
     
      
    </div>


  )
};


export default Banner