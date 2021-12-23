import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
import pant from './../assets/images/pant.jpg'


const Carousel1 = () => {
  return (
    <>
      <InfiniteCarousel breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
        dots={true}
        showSides={true}
        sidesOpacity={.1}
        sideSize={.9}
        slidesToScroll={1}
        slidesToShow={5}
        scrollOnDevice={true}

      >
        <div>
          <img src={pant} style={{ borderRadius: "30px" , height: '300px'}}></img>
         
        </div>
        <div>
          <img src={pant} style={{ borderRadius: "30px" }}></img>
          
        </div>
        <div>
          <img src={pant} style={{ borderRadius: "30px" }}></img>
         
        </div>
        <div>
          <img src={pant} style={{ borderRadius: "30px" }}></img>
         
        </div>
        <div>
          <img src={pant} style={{ borderRadius: "30px"}}></img>
          
        </div>
        <div>
          <img src={pant} style={{ borderRadius: "30px"}}></img>
        
        </div>
        <div>
          <img src={pant} style={{ borderRadius: "30px"}}></img>
         
        </div>
        <div>
          <img src={pant} style={{ borderRadius: "30px"}}></img>
          
        </div>
      </InfiniteCarousel>
      
    </>
  )
}

export default Carousel1

