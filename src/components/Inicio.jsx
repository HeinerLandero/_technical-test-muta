import React from 'react';
import { Skills } from './Skills';
import { Portafolio } from './Portafolio';
import { DescriptionPokemonIndex } from './DescriptionPokemonIndex';

export const Inicio = () => {
  return (
    <div className='wrapper'>
      <div className='inicio_container row'>
        <div className='person_card col-12'>
          <div className="container_description">
            <DescriptionPokemonIndex/>
          </div>
        </div>
      </div>
      <Skills />
      <Portafolio/>
    </div>
  )
}
