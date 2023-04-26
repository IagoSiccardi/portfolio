import React, { useRef, useState } from "react";
import "./contact.css";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from '@emailjs/browser';


const ContactModal = ({ setModal, modal, theme }) => {

  const [submit, setSubmit] = useState('Send');

  const sendFunction = () => {
    setSubmit("Your message has been sent")

    setTimeout(() => {
      setSubmit("Send")
    }, 1000);

  }

  const contactForm = useRef() 

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_bdsj50c', 'template_e8panrk', contactForm.current, 'kFNNVAzcW84WMk6KO')
      .then((result) => {
          console.log(result.text);
          contactForm.current.reset()
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <section
      className={`contact-modal bg-opacity-20 ${
        theme ? "bg-black" : "bg-white"
      }`}
      onClick={(e) =>
        e.target.classList[0] === "contact-modal" && setModal(!modal)
      }
    >
      <div className={`modal ${theme ? "bg-white" : "bg-black"}`}>
        <AiOutlineClose
          color={`${theme ? "black" : "white"}`}
          size="2rem"
          onClick={() => setModal(!modal)}
        />
        <form ref={contactForm} onSubmit={handleSubmit} >
          <input
            required
            type="text"
            name="user_name"
            placeholder="Name:"
            className={`form-input bg-opacity-5 ${
              theme ? "bg-transparent text-black" : "bg-transparent text-white"
            }`}
          />
          <input
            required
            type="email"
            placeholder="Email:"
            name="user_email"
            className={`form-input bg-opacity-5 ${
              theme ? "bg-transparent text-black" : "bg-transparent text-white"
            }`}
          />
          <textarea
            required
            name="message"
            className={`text-area bg-opacity-5 ${
              theme ? "bg-transparent text-black" : "bg-transparent text-white"
            }`}
            cols="30"
            rows="10"
          ></textarea>
          <button className="form-button" onClick={sendFunction}>
            <p className={` ${theme ? " text-black" : "text-white"}`}>{submit}</p>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactModal;
