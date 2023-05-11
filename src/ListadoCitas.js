import React from "react";
import cita from "./Cita";
import './App.css';

function listadoCitas({citas}) {
  
  return (
    
    <ul>
      {citas.map((item) => (
        <cita nombre={item} />
      ))}
    </ul>
  );
};

export default listadoCitas;






