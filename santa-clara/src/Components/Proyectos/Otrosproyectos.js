import React from 'react';
import { Link } from 'react-router-dom';
import './Proyectos.css';
import invul from '../Images/invul.jpg'
import ucrania from '../Images/ucrania.jpg'
import yosoy from '../Images/yosoy.jpg'




const Otrosproyectos = () => {
  const proyectos = [
    {
      id: 1,
      image: invul,
      title: 'Inulnerables',
      path: '/proyecto/1', // Add the path for the first project
    },
    {
      id: 2,
      image: ucrania,
      title: 'Corridores',
      path: '/proyecto/2', // Add the path for the second project
    },
    {
      id: 3,
      image: yosoy,
      title: 'Yo Soy',
      path: '/proyecto/3', // Add the path for the third project
    },
    
  ];

  return (
    <div className="proyectos-container">
      <h1 className='proyectos-title'>Otros Proyectos</h1>
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


export default Otrosproyectos