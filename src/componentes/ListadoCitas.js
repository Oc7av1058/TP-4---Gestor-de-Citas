import React from "react";
import Cita from "./Cita";


function ListadoCitas({citas,borrarCita}) {
  
  return (
    <div className="one-half column">
    <h2>Administra tu cita</h2>
    <ul>
      {citas.map((item,cont) => (
        item.id=cont,
        <Cita cita={item} borrarCita={borrarCita} />
      ))}
    </ul>
    </div>
  );
};

export default ListadoCitas;






