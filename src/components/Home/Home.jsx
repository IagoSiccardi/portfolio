import React from 'react'
import Proyects from '../Proyects/Proyects';
import HomeSection from './HomeSection';


const Home = ({theme, setTheme}) => {
  return (
  <>
  <HomeSection theme={theme} setTheme={setTheme}/>
  <Proyects theme={theme}/>
  </>
  )
}

export default Home