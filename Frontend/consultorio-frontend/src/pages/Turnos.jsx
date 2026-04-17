import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Turnos.css";

function Turnos() {
  const [turnos, setTurnos] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false); // nuevo estado
  const [nuevoTurno, setNuevoTurno] = useState({
    fecha: "",
    hora: "",
    pacienteId: "",
    profesionalId: "",
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
  const payload = {
    fecha: nuevoTurno.fecha,
    hora: nuevoTurno.hora,
    paciente: { id: nuevoTurno.pacienteId },
    profesional: { id: nuevoTurno.profesionalId }
  };

  api.post("/turnos", payload)
    .then((response) => {
      setTurnos([...turnos, response.data]);
      setNuevoTurno({
        fecha: "",
        hora: "",
        pacienteId: "",
        profesionalId: "",
      });
    })
    .catch((error) => console.error(error));
};

  return (
    <div className="turnos-container">
      {mostrarLista && (
        <> <h3>Lista de Turnos</h3>
        <ul className="turnos-list">
          {turnos.map((t) => (
            <li key={t.id}>
              Fecha: {t.fecha} - Hora: {t.hora} - Paciente: {t.paciente?.nombre}{" "}
              {t.paciente?.apellido} - Profesional: {t.profesional?.nombre}{" "}
              {t.profesional?.apellido}
            </li>
          ))}
        </ul>
        </>
      )}

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
          <label htmlFor="pacienteId">Paciente ID:</label>
          <input
            id="pacienteId"
            type="text"
            name="pacienteId"
            value={nuevoTurno.pacienteId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="profesionalId">Profesional ID:</label>
          <input
            id="profesionalId"
            type="text"
            name="profesionalId"
            value={nuevoTurno.profesionalId}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Guardar
        </button>
        <button
          className="btn-toggle"
          onClick={() => setMostrarLista(!mostrarLista)}
        >
          {mostrarLista ? "Ocultar turnos" : "Ver turnos"}
        </button>
      </form>
    </div>
  );
}

export default Turnos;
