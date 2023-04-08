import React from 'react'
import './contact.css'

const Contact = ({theme,setModal,modal}) => {
  return (
    <section className='contact-section'>
        <div className='contact-div'>
            <button className='button' onClick={() => setModal(!modal)}><p className={`${theme ? 'text-black' : 'text-white'}`}>Contact me</p></button>
        </div>
    </section>
  )
}

export default Contact