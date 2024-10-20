import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Proyecto = () => {
  const [proyect, setProyect] = useState({});
  const params = useParams();

  useEffect(()=>{
    let proyect = proyectos.filter(proyecto => proyecto.id === params.id ); 
    
    setProyect(proyect[0]);
    
  },[params.id]);

  return (
      <div className='proyect_container container'>
        <div className='content_proyect'>
            <div className='container'>
                <div className='row'>
                  <div className='col-6'>
                    <h1 className='title_page-proyect '>{proyect.name}</h1>
                    <p className='text_proyect'>
                      {proyect.content}
                    </p> 
                  </div>
                  <figure  className='col-6'>
                    <img width='100%' src={proyect.imagen} alt={'imagen '+proyect.alt}/>
                  </figure>
                </div>
            </div>
        </div>
      </div>
  )
}
