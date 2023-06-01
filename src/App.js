import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Formulario from './componentes/Formulario';

import ListadoCitas from './componentes/ListadoCitas';

function App() {
  const [lista, setLista] = useState([{
    Mascota:"Petty",
    Dueño:"Juan",
    Fecha:2023/6/8,
    Hora: "20:3",
    Sintomas: "Tiene ronchas"
  }
]
)

  
  return (
    <>
    
    <center><h1>Administrador de pacientes</h1></center>
    <div className='row'>
    <div class="container">
      <div class="row">
        <div class="one-half column">
        <h2>Crear mi cita</h2>
    
    <Formulario/>
    </div>
   
    <div className='row'>
    <ListadoCitas citas={lista}/>
    </div>
    </div>
    </div>
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