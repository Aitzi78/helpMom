import React from 'react';
import { useParams } from 'react-router-dom';

export default function ActualizarPregunta() {
  const { id } = useParams();
  return (
    <div>
      <h1>Ruta donde se actualizará la pregunta con ID: {id}</h1>
    </div>
  );
}
