import React from 'react'
import misa from '../Images/Sagrada-familia.jpg'
import './Noticias.css'


const Noticias = () => {
    const noticias = [
      {
        id: 1,
        image: misa, // Replace with the path to your image
        title: 'Noticia 1',
        description: 'Descripción para la Noticia 1.',
      },
      {
        id: 2,
        image: misa, // Replace with the path to your image
        title: 'Noticia 2',
        description: 'Descripción para la Noticia 2.',
      },
      {
        id: 3,
        image: misa,
        title: 'Noticia 3',
        description: 'Descripción para la Noticia 3.',
      },
    ];
  
    return (
      <div className="noticias-card-container">
        <h1 className='noticia-title'>Ultimas Noticias</h1>
        <div className="noticias-card-list">
          {noticias.map((noticia) => (
            <div className="noticias-card" key={noticia.id}>
              <img src={noticia.image} alt={noticia.title} />
              <h2>{noticia.title}</h2>
              <p>{noticia.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Noticias