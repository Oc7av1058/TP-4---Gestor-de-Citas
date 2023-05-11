import React from "react";
import Cita from "./Cita";


function ListadoCitas({citas}) {
  
  return (
    
    <ul>
      {citas.map((item) => (
        <Cita nombre={item} />
      ))}
    </ul>
  );
};

export default ListadoCitas;






