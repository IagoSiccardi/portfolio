import React from 'react'
import './contact.css'
import {AiOutlineClose} from 'react-icons/ai'

const ContactModal = ({setModal,modal,theme}) => {



  return (
    <section className={`contact-modal bg-opacity-20 ${theme ? "bg-black" : "bg-white" }`} onClick={e => e.target.classList[0] === "contact-modal" && setModal(!modal)}>
        <div className={`modal ${theme ? "bg-white" : "bg-black"}`}>
        <AiOutlineClose color={`${theme ? "black" : "white"}`} size='2rem' onClick={() => setModal(!modal)}/>
            <form action="">
              <textarea className={`text-area bg-opacity-5 ${theme ? "bg-transparent text-black" : "bg-transparent text-white" }`} cols="30" rows="10"></textarea>
              <button className='form-button'><p className={` ${theme ? " text-black" : "text-white" }`}>Send</p></button>
            </form>
        </div>
    </section>
  )
}

export default ContactModal