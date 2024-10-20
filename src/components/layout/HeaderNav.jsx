import React from 'react';
import logoB from '../../images/pokemon_logo_header.png';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <figure className='logo-container'>
          <img className='logo' src={logoB} alt='logo website'/>
        </figure>
    </header>
  )
}
