import React from 'react';
import './style.scss';
import Slider from 'react-slick';

const LogoSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <div className="logoslider">
      <Slider {...settings}>
        <img src="img/intuit_color.png" />
        <img src="img/sothebys.png" />
        <img src="img/disney_color.png" />
        <img src="img/sothebys.png" />
        <img src="img/intuit_color.png" />
        <img src="img/disney_color.png" />
        <img src="img/intuit_color.png" />
      </Slider>
    </div>
  );
};
export default LogoSlider;
