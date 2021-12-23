import React from "react"
import Slider from "react-slick";
import { Link } from 'react-router-dom'

import fashion from './../assets/images/CAT_FASHION.jpg'
import electronic from './../assets/images/CAT_ELECTRONIC.jpg'
import home from './../assets/images/CAT_HOME.jpg'
import sport from './../assets/images/CAT_SPORT.jpg'
import furniture from './../assets/images/CAT_FURNITURE.jpg'
import beauty from './../assets/images/CAT_BEUATY.jpg'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "grey",borderRadius: "30px" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey", borderRadius: "30px" }}
        onClick={onClick}
      />
    );
  }
const Category = () => {
    
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
             
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
        };
        return (
          <div style={{ padding: "0 25%", marginTop: "-22%", justifyContent: "center"}} className="slider-container">
            
            <Slider {...settings} style={{borderRadius: "20px", backgroundColor: "white",
            padding: "3% 6%"}} className="slider-category">
            <Link to="/FashionPage">
              <div>
                <img src={fashion} width="54vh" style={{color: "blueviolet"}}></img>
                
                <Link to="/FashionPage" style={{textDecoration: "none", color: "grey"}}>Fashion</Link>
              </div>
              </Link>
              <Link to="/ElectronicPage">
              <div>
                <img src={electronic} width="60%"></img>
                <Link to="/ElectronicPage" style={{textDecoration: "none", color: "grey"}}>Electronic</Link>
              </div>
              </Link>
              <div>
                <Link to="/SliderExample">
                <img src={home} width="53px"></img>
                <p>Home</p>
                </Link>
              </div>
              <div>
              <img src={electronic} width="60%"></img>
                <p>Electronic</p>
                
              </div>
              <div>
                <img src={furniture} width="46%"></img>
                <p>Furniture</p>
              </div>
              <div>
                <img src={sport} width="44%"></img>
                <p>Sport</p>
              </div>
              <div>
                <img src={home} width="53%"></img>
                <p>Home</p>
              </div>
              <div>
              <img src={electronic} width="60%"></img>
                <p>Electronic</p>
              </div>
            
            </Slider>
          </div>
        );
      
    };

export default Category
    