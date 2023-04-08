import React from 'react'
import proyects from '../../proyects'
import Proyect from './Proyect'
import './proyect.css'

const Proyects = ({theme}) => {

 

  return (
    <>
      <h2
        className={`proyects-h2 ${theme ? "text-black" : "text-white"}`}
        id="proyects"
      >
        Proyects
      </h2>
      <section className="proyects">
        {proyects.map(({ title, desc, img, git, tech },i) => {
          return (
            <Proyect
              title={title}
              desc={desc}
              img={img}
              git={git}
              tech={tech}
              key={+i + 1}
              theme={theme}
            />
          );
        })}
      </section>
    </>
  );
}

export default Proyects