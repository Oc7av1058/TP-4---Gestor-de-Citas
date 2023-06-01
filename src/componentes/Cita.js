import React from "react";


function Cita({cita}) {
  
  return (
    <>
    <div className="cita">
    <p>mascota:</p>
    <span>{cita.mascota}</span>
    <p>dueño:</p>
    <span>{cita.propietario}</span>
    <p>fecha:</p>
    <span>{cita.fecha}</span>
    <p>hora:</p>
    <span>{cita.hora}</span>
    <p>sintomas:</p>
    <span>{cita.sintomas}</span>
    <button className="button elimnar u-full-width">Eliminar ×</button>
    </div>
    </>
  );
    
   
};

export default Cita;






