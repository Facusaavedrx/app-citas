import { useState } from "react";
import Formulario from "./components/Formulario";

function App() {

  const [citas, guardarCitas] =  useState([]);
  
  const crearCita = cita => {
    guardarCitas([...citas, cita])
  }

  return (
    <div className="App">
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={ crearCita } />
          </div>
          <div className="one-half column">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
