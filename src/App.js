import logo from './logo.svg';
import './App.css';
import React from "react";
import crearCita from './CrearCita';
import listadoCitas from './ListadoCitas';

function App() {

  return (
    <>
    
    <h1>Administrador de pacientes</h1>
    <div className='row'>
    <crearCita/>
    </div>
    <div className='row'>
    <listadoCitas/>
    </div>

    </>
  )
}

export default App;






/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/