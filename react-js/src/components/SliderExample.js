
import React from "react"
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import pant from './../assets/images/pant.jpg'
import cap from './../assets/images/cap.jpg'
import desktop from './../assets/images/desktop.jpg'
import game from './../assets/images/game.jpg'
import girl from './../assets/images/girl.jpg'


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
        style={{ ...style, display: "block", background: "red", borderRadius: "30px" }}
        onClick={onClick}
      />
    );
  }
const Exam = () => {
    
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
          <div style={{ justifyContent: "center"}} className="slider-container">
            
            <Slider {...settings} style={{borderRadius: "20px", backgroundColor: "white",
            padding: "3% 6%"}} className="slider-category">
            <Link to="/FashionPage">
              <div>
                <img src={girl} width="80%" height="100%" style={{color: "blueviolet"}}></img>
                
                <Link to="/FashionPage" style={{textDecoration: "none", color: "grey"}}>Fashion</Link>
              </div>
              </Link>
              <Link to="/ElectronicPage">
              <div>
                <img src={pant} width="80%" height="100%"></img>
                <Link to="/ElectronicPage" style={{textDecoration: "none", color: "grey"}}>Electronic</Link>
              </div>
              </Link>
              <div>
                <img src={cap} width="80%" height="100%"></img>
                <p>Home</p>
              </div>
              <div>
              <img src={desktop} width="80%" height="100%"></img>
                <p>Electronic</p>
                
              </div>
              <div>
                <img src={game} width="80%" height="100%"></img>
                <p>Furniture</p>
              </div>
              <div>
                <img src={pant} width="80%" height="100%"></img>
                <p>Sport</p>
              </div>
              <div>
                <img src={girl} width="80%" height="100%"></img>
                <p>Home</p>
              </div>
              <div>
              <img src={cap} width="80%" height="100%"></img>
                <p>Electronic</p>
              </div>
            
            </Slider>
          </div>
        );
      
    };

export default Exam
    