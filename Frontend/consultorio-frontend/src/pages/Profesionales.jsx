import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Profesionales.css";

function Profesionales() {
  const [profesionales, setProfesionales] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [nuevoProfesional, setNuevoProfesional] = useState({
    nombre: "",
    apellido: "",
    matricula: "",
    especialidad: "",
  });

  // Estado para pacientes
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    api
      .get("/profesionales")
      .then((response) => setProfesionales(response.data))
      .catch((error) => console.error(error));

    // Cargar pacientes
    api
      .get("/pacientes")
      .then((response) => setPacientes(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setNuevoProfesional({
      ...nuevoProfesional,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/profesionales", nuevoProfesional)
      .then((response) => {
        setProfesionales([...profesionales, response.data]);
        setNuevoProfesional({
          nombre: "",
          apellido: "",
          matricula: "",
          especialidad: "",
        });
      })
      .catch((error) => console.error(error));
  };

  // Función para eliminar paciente
  const handleDeletePaciente = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este paciente?")) {
      api
        .delete(`/pacientes/${id}`)
        .then(() => {
          setPacientes(pacientes.filter((p) => p.id !== id));
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="profesionales-container">
      {mostrarLista && (
        <>
          <h3>Lista de Profesionales</h3> <hr />
          <ul className="profesionales-list">
            {profesionales.map((p) => (
              <li key={p.id}>
                <b>{p.id}</b> - Nombre: {p.nombre} {p.apellido} <br /> 
                Matrícula: {p.matricula} <br /> 
                Especialidad: {p.especialidad} <hr />
              </li>
            ))}
          </ul>

          <h3>Lista de Pacientes</h3>
          <ul className="pacientes-list"> <hr />
            {pacientes.map((p) => (
              <li key={p.id}>
               <b>{p.id}</b> -{p.nombre} {p.apellido} / DNI: {p.dni}
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePaciente(p.id)}
                >
                  Eliminar
                </button> <hr />
              </li>
            ))}
          </ul>
        </>
      )}

      <h3>Agregar Profesional</h3>
      <form className="profesional-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={nuevoProfesional.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            value={nuevoProfesional.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            id="matricula"
            type="text"
            name="matricula"
            value={nuevoProfesional.matricula}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="especialidad">Especialidad:</label>
          <input
            id="especialidad"
            type="text"
            name="especialidad"
            value={nuevoProfesional.especialidad}
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
          {mostrarLista ? "Ocultar listas" : "Ver listas"}
        </button>
      </form>
    </div>
  );
}

export default Profesionales;