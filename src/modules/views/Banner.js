import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-slides.css"
import withdog1 from "../views/hy/assets/withdog1.png"
import withdog3 from "../views/hy/assets/withdog3.png"
import withdog4 from "../views/hy/assets/withdog4.png"
import withdog5 from "../views/hy/assets/withdog5.png"



export default class Banner extends Component {
  render() {
    const settings = {
        innerHeight: 100,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true,
        fade: true,
        arrows: true,
        autoplaySpeed: 5000,
        className: 'slides',
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight:true
            }
          }
        ]
      };
    return (
        <div className="container">
        <Slider {...settings}>
          <div>
            <img src={withdog3} alt="doggo1" style={{ width:'100%' }} />
          </div>
          <div>
            <img src={withdog4}  alt="doggo2" style={{ width:'100%' }}/>
          </div>
          <div>
            <img src={withdog5}  alt="doggo3" style={{ width:'100%' }} />
          </div>
          <div>
            <img src={withdog1}  alt="doggo4" style={{ width:'100%' }}/>
          </div>
        </Slider>
      </div>
    );
  }
}