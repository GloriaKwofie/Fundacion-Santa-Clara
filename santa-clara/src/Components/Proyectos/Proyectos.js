import React from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css';
import plataforma from '../Images/plataforma.webp'
import resi from '../Images/resi.jpg'
import pisos from '../Images/pisos.jpg'
import taller from '../Images/taller.jpg'
import duchas from '../Images/ducha.webp'
import cosidor from '../Images/cosidor.webp'
import huerto from '../Images/huerto.jpg'
import ofta from '../Images/ofta.jpg'









const Proyectos = () => {
  const proyectos = [
    {
      id: 1,
      image: plataforma,
      title: 'Plataforma',
      path: '/plataforma', // Add the path for the first project
    },
    {
      id: 2,
      image: resi,
      title: 'Residencia',
      path: '/resi', // Add the path for the second project
    },
    {
      id: 3,
      image: pisos,
      title: 'Pisos',
      path: '/pisos', // Add the path for the third project
    },
    {
        id: 4,
        image: taller,
        title: 'Taller',
        path: '/taller', // Add the path for the third project
      },
      {
        id: 5,
        image: duchas,
        title: 'Duchas',
        path: '/duchas', // Add the path for the third project
      },
      {
        id: 6,
        image: cosidor,
        title: 'Cosidor',
        path: '/cosidor', // Add the path for the third project
      },
      {
        id: 7,
        image: huerto,
        title: 'Huerto ecológico',
        path: '/huerto', // Add the path for the third project
      },
      {
        id: 8,
        image: ofta,
        title: 'Oftamologia',
        path: '/ofta', // Add the path for the third project
      },
    // Add more projects as needed
  ];

  return (
    <div className="proyectos-container">
      <h1 className='proyectos-title'>Proyectos</h1>
      <div className="proyectos-card-list">
        {proyectos.map((proyecto) => (
          <Link to={proyecto.path} key={proyecto.id} className="proyecto-card">
            <img src={proyecto.image} alt={proyecto.title} />
            <h2>{proyecto.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
