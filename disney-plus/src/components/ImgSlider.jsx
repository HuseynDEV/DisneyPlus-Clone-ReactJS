import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <img src={require("../images/slider-badag.jpg")} alt="" />
        </Wrap>
        <Wrap>
          <img src={require("../images/slider-badging.jpg")} alt="" />
        </Wrap>
        <Wrap>
          <img src={require("../images/slider-scale.jpg")} alt="" />
        </Wrap>
        <Wrap>
          <img src={require("../images/slider-scales.jpg")} alt="" />
        </Wrap>
      </Carousel>
    </div>
  );
};


const Carousel=styled(Slider)`

margin-top:20px;

&>button{
    opacity:0;
    height:100%;
    width: 5vw;
    z-index: 1;

    &:hover{
        opacity:1
    }

}


.slick-list{
    overflow:initial
}


.slick-prev{
    left:-80px
}

.slick-next{
    right:-80px
}

.slick-dots li button:before{
    color:white;
    font-size:10px;
}


`

const Wrap=styled.div`
img{
    width:100%;
    height:100%
}
`

export default ImgSlider;
