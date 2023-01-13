import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Formulario({ crearCita }) {

  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    cita.id = (uuidv4())
    crearCita(cita)
  };

  return (
    <>
      <h2>Crear cita</h2>

      { error ?  <p className="alerta-error"> ¡Todos los campos son obligatorios! </p> : null }

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          value={mascota}
          className="u-full-width"
          placeholder="..."
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          value={propietario}
          className="u-full-width"
          placeholder="..."
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={fecha}
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={hora}
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          placeholder="..."
          className="u-full-width"
          value={sintomas}
          onChange={handleChange}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
}

export default Formulario;
