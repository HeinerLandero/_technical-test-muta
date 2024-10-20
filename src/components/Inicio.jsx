import React from 'react';
import { Skills } from './Skills';
import  PersonCard  from './PersonCard';
import { Portafolio } from './Portafolio';
import { DescriptionPokemonIndex } from './DescriptionPokemonIndex';
// import { Modal } from './Modal';

export const Inicio = () => {
  return (
    <div className='wrapper'>
      <div className='inicio_container row'>
        <div className='person_card'>
          <div className='container_person'>
            <PersonCard/>
          </div>
          <div className="container_description">
            <DescriptionPokemonIndex/>
          </div>
        </div>
      </div>
      <Skills />
      <Portafolio/>
      {/* <Modal/> */}
    </div>
  )
}
