import React from 'react'
import Videopart from './Videopart'
import Noticias from '../Noticias/Noticias'
import Proyectos from '../Proyectos/Proyectos'
import Otrosproyectos from '../Proyectos/Otrosproyectos'

function Homepage() {
  return (
    <div>
        <Videopart/>
        <Noticias/>
        <Proyectos/>
        <Otrosproyectos/>
    </div>
  )
}

export default Homepage