import { useEffect, useState } from 'react';

const PREGUNTA_ENDPOINT = 'https://helpmombackend-7f59d2e18206.herokuapp.com/api/Preguntas/';
const RESPUESTA_ENDPOINT = 'https://helpmombackend-7f59d2e18206.herokuapp.com/api/Respuestas/';

export function useCuestionarioApi(indicePregunta) {
  /* Hook que devuelve preguntas y respuestas */
  const [pregunta, setPregunta] = useState(null);
  const [respuestas, setRespuestas] = useState([]);
  // Añadimos numero de pregunta a la api
  //console.log(numeroPregunta);
  useEffect(() => {
    const fetchPregunta = async () => {
      const response = await fetch(PREGUNTA_ENDPOINT + indicePregunta);
      const data = await response.json();

      setPregunta(data.titulo);
    };

    const fetchRespuestas = async () => {
      const response = await fetch(RESPUESTA_ENDPOINT + indicePregunta);
      const data = await response.json();

      setRespuestas(data);
    };

    fetchPregunta();
    fetchRespuestas();
  }, [indicePregunta]);

  return { pregunta, respuestas };
}
