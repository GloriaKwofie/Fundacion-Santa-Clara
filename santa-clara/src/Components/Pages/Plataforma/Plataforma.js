
import React from 'react';
//import Platcard from './Platcard';// Assume you have a Card component
import Image1 from '../../Images/plataforma.webp'; // Replace with your image paths
import Image2 from '../../Images/plataforma.webp'; // Replace with your image paths
import Image3 from '../../Images/plataforma.webp'; // Replace with your image paths
import Image4 from '../../Images/plataforma.webp'; // Replace with your image paths
import './Plataforma.css'; // Import the CSS file for styling

const Plataforma = () => {
  // Intro text
  const introText =
    "Bienvenido a nuestra Plataforma. Aquí encontrarás información sobre nuestra organización y los servicios que ofrecemos.";


  return (
    <div className="plataforma-page">
      {/* Title with background image */}
      <div className="plat-title-section">
        <h1 className='plat-title'>Nuestra Plataforma</h1>
      </div>

      {/* Introduction */}
      <div className="plat-intro-section">
        <p>{introText}</p>
      </div>

      {/* Four Images in the Same Row */}
      <div className="plat-images-section">
        <img src={Image1} alt="Image 1" />
        <img src={Image2} alt="Image 2" />
        <img src={Image3} alt="Image 3" />
        <img src={Image4} alt="Image 4" />
      </div>
    </div>
  );
};

export default Plataforma;
