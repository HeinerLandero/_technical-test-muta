import React from 'react';

export const Footer = () => {
    const date = ()=> {
        const currentDate = new Date();
        return currentDate.getFullYear();
      }
      let currentYear = date();
  return (
    <footer className='footer'>
        Pueba técnica para MUTA Heiner Landero &copy; Desarrollado en React.js {currentYear}
    </footer>
  )
}
