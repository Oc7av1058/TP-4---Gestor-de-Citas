import React from "react";
import './App.css';

function cita({caso}) {
  
  return (
    <>
    <h2>Administra tu cita</h2>
    <p>mascota:</p>
    <span>{caso.Mascota}</span>
    <p>dueño:</p>
    <span>{caso.Dueño}</span>
    <p>fecha:</p>
    <span>{caso.Fecha}</span>
    <p>hora:</p>
    <span>{caso.Hora}</span>
    <p>sintomas:</p>
    <span>{caso.Sintomas}</span>
    </>
  );
    
   
};

export default cita;






