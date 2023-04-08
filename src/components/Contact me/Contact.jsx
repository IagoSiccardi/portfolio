import React from 'react'
import './contact.css'

const Contact = ({theme}) => {
  return (
    <section className='contact-section'>
        <div className='contact-div'>
            <button className='button'><p className={`${theme ? 'text-black' : 'text-white'}`}>Contact me</p></button>
        </div>
    </section>
  )
}

export default Contact