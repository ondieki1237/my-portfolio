import React from 'react';
import Slider from 'react-slick';
import './PortfolioGallery.css';
import portfolioImage from '../assets/IMG-20241108-WA0001.JPG';
import portfolioImage1 from '../assets/WhatsApp Image 2024-10-19 at 11.56.55_cc26e35f.jpg';
import portfolioImage2 from '../assets/WhatsApp Image 2024-10-19 at 11.57.02_569e55e8.jpg';
import portfolioImage3 from '../assets/WhatsApp Image 2024-10-19 at 11.57.02_5822fc48.jpg'

function PortfolioGallery() {
  const images = [portfolioImage, portfolioImage1, portfolioImage2, portfolioImage3]; // Add as many images as you like

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Portfolio Image ${index + 1}`} className="portfolio-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}


export default PortfolioGallery;
