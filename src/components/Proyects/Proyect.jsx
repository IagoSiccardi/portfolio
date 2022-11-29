import React from 'react'
import './proyect.css'
import sunset from '../../Assets/sunset.png'

const Proyect = () => {
  return (
    <div className='proyect-borderShadow'>
    <article className='proyect-card'>
        <div className='description'>
            <span>Titulo del proyecto</span>
            <p>Descripcion del proyecto</p>
        </div>
        <div className='img-container'>
            <img src={sunset} alt="Descripcion del proyecto" />
        </div>
    </article>
    </div>
  )
}


export default Proyect