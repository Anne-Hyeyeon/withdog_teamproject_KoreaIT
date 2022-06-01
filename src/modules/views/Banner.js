import React, { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slick-slides.css"
import withdog1 from "../views/hy/assets/withdog1.png"
import withdog3 from "../views/hy/assets/withdog3.png"
import withdog4 from "../views/hy/assets/withdog4.png"
import withdog5 from "../views/hy/assets/withdog5.png"
import { Box } from "@mui/system";
import Typography from "../components/Typography";



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
        <Box className="container">
        <Slider {...settings}>
          <Box >
          <img src={withdog3} alt="doggo1" style={{ width:'100%' }} />
            <Box sx={{ display: { xs: 'none', sm:'inherit'}, position:'absolute', left:'3%', top:'68%'}}>
            <Typography color="inherit" align="left" variant="h4" marked="center" sx={{ fontWeight:'bold' }}>
        윗독에 돌아오신 걸 환영해요!
      </Typography>
      <Typography
        color="inherit"
        align="left"
        variant="body1"
        sx={{mt:1}}
      >
        에견인들을 위한 다양한 활동들이 기다리고 있어요!
      </Typography>

        </Box>
          </Box>
          <Box>
            <img src={withdog4}  alt="doggo2" style={{ width:'100%' }}/>
            <Box sx={{ display: { xs: 'none', sm:'inherit'}, position:'absolute', left:'3%', top:'68%'}}>
            <Typography color="inherit" align="left" variant="h4" marked="center" sx={{ fontWeight:'bold' }}>
        윗독에 돌아오신 걸 환영해요!
      </Typography>
      <Typography
        color="inherit"
        align="left"
        variant="body1"
        sx={{mt:1}}
      >
        에견인들을 위한 다양한 활동들이 기다리고 있어요!
      </Typography>

        </Box>
          </Box>
          <Box>
            <img src={withdog5}  alt="doggo3" style={{ width:'100%' }} />
            <Box sx={{ display: { xs: 'none', sm:'inherit'}, position:'absolute', left:'3%', top:'68%'}}>
            <Typography color="inherit" align="left" variant="h4" marked="center" sx={{ fontWeight:'bold' }}>
        윗독에 돌아오신 걸 환영해요!
      </Typography>
      <Typography
        color="inherit"
        align="left"
        variant="body1"
        sx={{mt:1}}
      >
        에견인들을 위한 다양한 활동들이 기다리고 있어요!
      </Typography>

        </Box>
          </Box>
          <Box>
            <img src={withdog1}  alt="doggo4" style={{ width:'100%' }}/>
          </Box>
        </Slider>
      </Box>
    );
  }
}