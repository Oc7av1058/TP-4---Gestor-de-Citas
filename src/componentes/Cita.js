import React from "react";


function Cita({cita}) {
  
  return (
    <>
    <h2>Administra tu cita</h2>
    <p>mascota:</p>
    <span>{cita.Mascota}</span>
    <p>dueño:</p>
    <span>{cita.Dueño}</span>
    <p>fecha:</p>
    <span>{cita.Fecha}</span>
    <p>hora:</p>
    <span>{cita.Hora}</span>
    <p>sintomas:</p>
    <span>{cita.Sintomas}</span>
    <button class="button elimnar u-full-width">Eliminar ×</button>
    </>
  );
    
   
};

export default Cita;






