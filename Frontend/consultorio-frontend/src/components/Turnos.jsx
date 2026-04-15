import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Turnos.css";

function Turnos() {
  const [turnos, setTurnos] = useState([]);
  const [nuevoTurno, setNuevoTurno] = useState({
    fecha: "",
    hora: "",
    paciente: { id: "" },
    profesional: { id: "" },
    estado: "Pendiente",
  });

  useEffect(() => {
    api
      .get("/turnos")
      .then((response) => setTurnos(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setNuevoTurno({ ...nuevoTurno, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/turnos", nuevoTurno)
      .then((response) => {
        setTurnos([...turnos, response.data]);
        setNuevoTurno({
          fecha: "",
          hora: "",
          paciente: { id: "" },
          profesional: { id: "" },
          estado: "Pendiente",
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="turnos-container">
      <h2>Listado de Turnos</h2>
      <ul className="turnos-list">
        {turnos.map((t) => (
          <li key={t.id}>
            {t.fecha} {t.hora} - Paciente: {t.paciente?.nombre}{" "}
            {t.paciente?.apellido} / Profesional: {t.profesional?.nombre}{" "}
            {t.profesional?.apellido}
          </li>
        ))}
      </ul>

      <h3>Agregar Turno</h3>
      <form className="turno-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input
            id="fecha"
            type="date"
            name="fecha"
            value={nuevoTurno.fecha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hora">Hora:</label>
          <input
            id="hora"
            type="time"
            name="hora"
            value={nuevoTurno.hora}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pacienteId">ID Paciente:</label>
          <input
            id="paciente"
            type="text"
            name="paciente"
            value={nuevoTurno.paciente.id}
            onChange={(e) =>
              setNuevoTurno({ ...nuevoTurno, paciente: { id: e.target.value } })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="profesionalId">ID Profesional:</label>
          <input
            id="profesional"
            type="text"
            name="profesional"
            value={nuevoTurno.profesional.id}
            onChange={(e) =>
              setNuevoTurno({
                ...nuevoTurno,
                profesional: { id: e.target.value },
              })
            }
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Turnos;
