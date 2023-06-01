import React, { useState } from "react";


function Formulario() {
  

  const [mascota, setMascota]= useState("")
  const [propietario, setPropietario]= useState("")
  const [fechaCita, setFecha]= useState(Date.now)
  const [mascota, setMascota]= useState("")
  const [mascota, setMascota]= useState("")
  
  return (
    <>
    <form>
    <label> Nombre Mascota</label> 
    <input type="text"  name="mascota" className="u-full-width" placeholder="Nombre Mascota" value=""></input>
    
    <label> Nombre Propietario</label> 
    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre Propietario" value=""></input>

    <label> Fecha Cita</label> 
    <input type="date" name="fecha" className="u-full-width"  value=""></input>

    <label>Hora</label> 
    <input type="time" name="hora" className="u-full-width"  value=""></input>

    <label>Sintomas</label> 
    <textarea name="sintomas" className="u-full-width"></textarea>

    <button type="submit" className="u-full-width button-primary" onChange={"AgregarCita"()}>Agregar Cita</button>
    </form>
  </>
  )
}

export default Formulario;






