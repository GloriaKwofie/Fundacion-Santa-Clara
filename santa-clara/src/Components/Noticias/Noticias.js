import React, { useState, useEffect } from "react";
import "./Noticias.css";
import { Link } from "wouter";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("http://localhost:3001/news");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("No se pudo obtener las noticias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div className="noticias-card-container">
      <h1 className="noticia-title">Ultimas Noticias</h1>
      <div className="noticias-card-list">
        {noticias.map((noticia) => (
          <div className="noticias-card" key={noticia.id}>
            <Link to={`/News/${noticia.id}`}>
              <img src={noticia.carrousel1} alt={noticia.title} />
              <h2>{noticia.title}</h2>
              <p>{noticia.subtitle}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
