import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Formulario from './componentes/Formulario';

import ListadoCitas from './componentes/ListadoCitas';
// validar form
//limpiar form
function App() {
  const [lista, setLista] = useState([{
    id:0,
    mascota:"Petty",
    propietario:"Juan",
    fecha:2023/6/8,
    hora: "20:3",
    sintomas: "Tiene ronchas"
  }
]
)

const actualizarListado=(cita)=>{
setLista([...lista, cita])
console.log(lista);
}
const borrarDeLista=(indice)=>{
  setLista(lista.filter((citaList) => citaList.id !== indice))
  }
  
  return (
    <>
    
    <center><h1>Administrador de pacientes</h1></center>
    <div className='row'>
    <div className="container">
      <div className="row">
        <div className="one-half column">
        <h2>Crear mi cita</h2>
    
    <Formulario sacarDatos={actualizarListado}/>
    </div>
   
    <div className='row'>
    <ListadoCitas citas={lista} borrarCita={borrarDeLista}/>
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