import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
const LOGIN_ENDPOINT = 'http://localhost:5000/api/auth/login';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Estado para redirigir si inicia sesion correctamente
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        setRedirect(true);
      } else {
        setError('Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  if (redirect) {
    return <Redirect to='/preguntas' />;
  }

  return (
    <div className='contenedor-login'>
      <h2 className='titulo-login'>Sesion Administrador</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className='login-usuario' htmlFor='username'>
          Usuario:
        </label>
        <input
          className='login-input'
          type='text'
          id='username'
          name='nombreUsuario'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className='login-usuario' htmlFor='password'>
          Contraseña:
        </label>
        <input
          className='login-input'
          type='password'
          id='password'
          name='contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className='login-boton' type='submit'>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
