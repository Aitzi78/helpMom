import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TituloPortada from './portada/titulo-portada';
import Test from './portada/test';
import PuntuacionTotal from './portada/puntuacion-total';
import Login from './portada/login';

import Home from './paginas/home';
import Play from './paginas/play';
import Aviso from './paginas/aviso';
import Administrador from './paginas/administrador';
import fotosCarrusel from './paginas/fotosCarrusel';
import Carrusel from './portada/carrusel';
import { PuntuacionProvider } from '../context/puntuacion';
import Preguntas from './paginas/preguntas';
import ActualizarPregunta from './paginas/actualizarPregunta';
import NuevaPregunta from './paginas/nuevaPregunta';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <PuntuacionProvider>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/play' component={Play} />
              <Route path='/aviso' component={Aviso} />
              <Route path='/administrador' component={Administrador} />
              <Route path='/fotosCarrusel' component={fotosCarrusel} />
              <Route path='/preguntas' component={Preguntas} />
              <Route path='/nueva-pregunta' component={NuevaPregunta} />
              <Route path='/actualizar/:id' component={ActualizarPregunta} />
            </PuntuacionProvider>
          </Switch>
        </Router>
      </div>
    );
  }
}
