import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-slides.css"


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
            <img src="https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg" alt="doggo1" style={{ width:'100%' }} />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg"  alt="doggo2" style={{ width:'100%' }}/>
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2018/05/17/06/22/dog-3407906_1280.jpg"  alt="doggo3" style={{ width:'100%' }} />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_1280.jpg"  alt="doggo4" style={{ width:'100%' }}/>
          </div>
        </Slider>
      </div>
    );
  }
}