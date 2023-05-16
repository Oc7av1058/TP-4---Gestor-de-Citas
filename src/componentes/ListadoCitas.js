import React from "react";
import Cita from "./Cita";


function ListadoCitas({citas}) {
  
  return (
    <div class="one-half column">
    <h2>Administra tu cita</h2>
    <ul>
      {citas.map((item) => (
        <Cita cita={item} />
      ))}
    </ul>
    </div>
  );
};

export default ListadoCitas;






