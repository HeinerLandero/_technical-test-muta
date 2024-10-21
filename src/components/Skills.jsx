import React from 'react';
import { Cards } from './Cards';

export const Skills = ({ onSelectPokemon }) => { 
  return (
    <div className='container_main flex-column d-flex align-items-center about-me'>
      <div className='container d-flex'> 
        <div className='col-12 intro_content'>
          <h2 className='mt-4 col-12 title'>Choose a Pokemon</h2>
          <Cards onSelectPokemon={onSelectPokemon} />
        </div>
      </div>
    </div>
  );
};
