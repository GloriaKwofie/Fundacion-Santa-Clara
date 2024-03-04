import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./Noticias.css";

const Carrousel = () => {
  const [images, setImage] = useState([]);
  const scrollContainerRef = useRef();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch("http://localhost:3001/news");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImage(data);
      } catch (error) {
        console.error("No se pudo obtener las noticias:", error);
      }
    };

    fetchImage();
  }, []);

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
              <img src={image.carrousel1} alt={`Imagen ${index}-1`} />
              <img src={image.carrousel2} alt={`Imagen ${index}-2`} />
              <img src={image.carrousel3} alt={`Imagen ${index}-3`} />
              <img src={image.carrousel4} alt={`Imagen ${index}-4`} />
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
