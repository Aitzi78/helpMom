import React from 'react';
import { NavLink } from 'react-router-dom';

import Titulo from '../imagenes/titulo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function TituloPortada() {
  return (
    <div className='titulo-portada'>
      
      
      <img src={Titulo} />
      <Link to='/play'>
        <button className='boton-play-portada'>Play</button>
      </Link>
    </div>
  );
}
