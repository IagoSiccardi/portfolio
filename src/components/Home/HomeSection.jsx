import React from 'react'
import './home.css'
import {HashLink} from 'react-router-hash-link';


const HomeSection = () => {
  return (
    <section className='home-section'>
        <article className='home-aboutMe'>
            <h2>Im Iago Siccardi</h2>
            <span>Full Stack developer</span>   
        </article>
          
        <HashLink to="#proyects" className='slide-button animate__animated animate__slideInDown'>
          <span>S</span><span>l</span><span>i</span><span>d</span><span>e</span><span className="material-symbols-outlined arrow">arrow_downward</span>
        </HashLink>

    </section>


  )
}


export default HomeSection


