import { useState } from "react";

function Formulario() {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          value={ mascota }
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          value={ propietario }
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={ fecha }
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={ hora }
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          value={ sintomas }
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
