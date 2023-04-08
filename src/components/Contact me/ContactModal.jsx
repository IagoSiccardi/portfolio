import React from 'react'
import './contact.css'
import {AiOutlineClose} from 'react-icons/ai'

const ContactModal = ({setModal,modal,theme}) => {
  return (
    <section className={`contact-modal bg-opacity-20 ${theme ? "bg-black" : "bg-white" }`}>
        <div className='modal'>
        <AiOutlineClose color='white' size='2rem' onClick={() => setModal(!modal)}/>
            hola
        </div>
    </section>
  )
}

export default ContactModal