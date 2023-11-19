import React, { createContext, useContext, useState } from 'react';

const PuntuacionContext = createContext();

export const usePuntuacion = () => {
  return useContext(PuntuacionContext);
};

export const PuntuacionProvider = ({ children }) => {
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);

  const actualizarPuntuacionTotal = (nuevaPuntuacion) => {
    setPuntuacionTotal(nuevaPuntuacion);
  };

  const reiniciarPuntuacion = () => {
    setPuntuacionTotal(0);
  };

  return (
    <PuntuacionContext.Provider
      value={{
        puntuacionTotal,
        actualizarPuntuacionTotal,
        reiniciarPuntuacion,
      }}
    >
      {children}
    </PuntuacionContext.Provider>
  );
};
