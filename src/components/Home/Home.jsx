import React from 'react'
import Proyects from '../Proyects/Proyects';
import HomeSection from './HomeSection';
import Contact from '../Contact me/Contact';



const Home = ({theme, setTheme,modal, setModal}) => {


  return (
  <div className='p-5 lg:p-20 '>
  <HomeSection theme={theme} setTheme={setTheme}/>
  <Proyects theme={theme}/>
  <Contact theme={theme} modal={modal} setModal={setModal}/>
  </div>
  )
}

export default Home