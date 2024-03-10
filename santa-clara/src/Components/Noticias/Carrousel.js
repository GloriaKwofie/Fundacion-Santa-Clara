import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./Noticias.css";

const Carrousel = ({ images }) => {
  const scrollContainerRef = useRef();
  console.log(images);

  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      // Mueve el scroll a la imagen anterior, basado en el ancho de la ventana
      scrollContainerRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleRightClick = () => {
    if (scrollContainerRef.current) {
      // Mueve el scroll a la imagen siguiente, basado en el ancho de la ventana
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="carrousel-container">
        <IoIosArrowBack
          onClick={handleLeftClick}
          className="arrow fa-arrow-left"
        />
        <div ref={scrollContainerRef} className="carrousel-scroll-container">
          {images.map((image, index) => (
            <div className="carrousel-image-container" key={index}>
              <img src={image} alt={`Imagen del carrousel ${index}`} />
            </div>
          ))}
        </div>
        <IoIosArrowForward
          onClick={handleRightClick}
          className="arrow fa-arrow-right"
        />
      </div>
    </>
  );
};

export default Carrousel;
