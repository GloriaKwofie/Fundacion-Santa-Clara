import React, { useState, useEffect } from "react";
import { useRoute } from "wouter";
import Carrousel from "./Carrousel";

const NewsPage = () => {
  const [match, params] = useRoute("/News/:id");
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      if (params.id) {
        try {
          const response = await fetch(
            `http://localhost:3001/news/${params.id}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setNoticia(data);
        } catch (error) {
          console.error("No se pudo obtener la noticia:", error);
        }
      }
    };

    fetchNoticia();
  }, [params.id]); // Dependencia en el ID de la ruta

  return (
    <>
      {noticia && (
        <Carrousel
          images={[
            noticia.carrousel1,
            noticia.carrousel2,
            noticia.carrousel3,
            noticia.carrousel4,
          ]}
        />
      )}
      {/* ... otros detalles de la noticia ... */}
    </>
  );
};

export default NewsPage;
