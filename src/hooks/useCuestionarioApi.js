import { useEffect, useState } from 'react';

const PREGUNTAS_ENDPOINT = 'http://localhost:5000/api/preguntas/';
const RESPUESTAS_ENDPOINT ='http://localhost:5000/api/respuestas/';

export function useCuestionarioApi(indicePregunta) {
  /* Hook que devuelve preguntas y respuestas */
  const [pregunta, setPregunta] = useState(null);
  const [respuestas, setRespuestas] = useState([]);
  // Añadimos numero de pregunta a la api
  //console.log(numeroPregunta);
  useEffect(() => {
    const fetchPregunta = async () => {
      const response = await fetch(PREGUNTAS_ENDPOINT + indicePregunta);
      const data = await response.json();

      setPregunta(data.titulo);
    };

    const fetchRespuestas = async () => {
      const response = await fetch(RESPUESTAS_ENDPOINT + indicePregunta);
      const data = await response.json();

      setRespuestas(data);
    };

    fetchPregunta();
    fetchRespuestas();
  }, [indicePregunta]);

  return { pregunta, respuestas };
}
