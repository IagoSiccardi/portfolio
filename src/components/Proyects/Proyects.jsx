import React from 'react'
import Proyect from './Proyect'
import './proyect.css'

const Proyects = () => {
  return (
    <>
    <h2 className='proyects-h2' id='proyects'>Proyects</h2>
    <section className='proyects'>
        <Proyect/>
        <Proyect/>
        <Proyect/>

    </section>
    </>
  )
}

export default Proyects