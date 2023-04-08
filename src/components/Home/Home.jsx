import React from 'react'
import Proyects from '../Proyects/Proyects';
import HomeSection from './HomeSection';
import Contact from '../Contact me/Contact';


const Home = ({theme, setTheme}) => {
  return (
  <>
  <HomeSection theme={theme} setTheme={setTheme}/>
  <Proyects theme={theme}/>
  <Contact theme={theme}/>
  </>
  )
}

export default Home