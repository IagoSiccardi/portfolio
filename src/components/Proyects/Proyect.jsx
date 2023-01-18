import React from 'react'
import './proyect.css'
import {FaGithub} from 'react-icons/fa'

const Proyect = ({title,desc,img,git}) => {

  return (
    <div className='proyect-borderShadow'>
    <article className='proyect-card'>
        <div className='description'>
            <span>{title}</span>
            <p>{desc}</p>
            <a href={git} target='blank'> <FaGithub size="2rem"/> </a>
        </div>
        <div className='img-container'>
            <img src={img} alt="" />
        </div>
    </article>
    </div>
  )
}


export default Proyect