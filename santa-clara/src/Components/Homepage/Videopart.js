import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import misa from '../Images/Sagrada-familia.jpg'
import misa2 from '../Images/misacriolla.jpg'



import './Videopart.css';

const Videopart  = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Adjust the speed in milliseconds
    };
  
    return (
      <div className="video-page-container">
        <div className="video-section">
          {/* You can replace the video source with your own */}
          <iframe
            title="Video"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="slideshow-section">
          <Slider {...settings}>
            <div className="slide">
              <img src={misa} alt="Slide 1" />
              <p>Text for Slide 1</p>
            </div>
            <div className="slide">
              <img src={misa2} alt="Slide 2" />
              <p>Text for Slide 2</p>
            </div>
            <div className="slide">
              <img src={misa2} alt="Slide 2" />
              <p>Text for Slide 2</p>
            </div>
            <div className="slide">
              <img src={misa2} alt="Slide 2" />
              <p>Text for Slide 2</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  };

export default Videopart