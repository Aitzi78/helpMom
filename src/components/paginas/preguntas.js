import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../style/preguntas.scss';

const PREGUNTAS_ENDPOINT = 'http://localhost:5000/api/preguntas';

export default function Preguntas() {
  const [preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const response = await fetch(PREGUNTAS_ENDPOINT);
        if (response.ok) {
          const data = await response.json();
          setPreguntas(data);
        } else {
          console.error('Error al obtener las preguntas');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchPreguntas();
  }, []);

  return (
    <div className='list-container'>
      <h2>¡Bienvenido!</h2>

      <Link to='/nueva-pregunta' className='custom-btn-nueva-pregunta'>
        Nueva Pregunta
      </Link>

      <ul className='list-group'>
        {preguntas.map((pregunta) => (
          <li key={pregunta.id} className='list-group-item'>
            {pregunta.titulo}
            <div className='action-buttons'>
              <Link to={`/actualizar/${pregunta.id}`}>
                <button className='btn btn-actualizar'>Actualizar</button>
              </Link>
              <Link to={`/borrar/${pregunta.id}`}>
                <button className='btn btn-borrar'>Borrar</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
