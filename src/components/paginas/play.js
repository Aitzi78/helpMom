import React from 'react';
import { Link } from 'react-router-dom';
import PortadaContenedor from '../portada/portadaContenedor';
export default function () {
  return (
    <div>
      <div>
        <Link to='/play' />
      </div>

      <PortadaContenedor />
    </div>
  );
}
