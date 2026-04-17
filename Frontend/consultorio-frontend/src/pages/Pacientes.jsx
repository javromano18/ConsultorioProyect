import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Pacientes.css"; 

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [nuevoPaciente, setNuevoPaciente] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    email: "",
    fechaNacimiento: ""
  });

  // Obtener pacientes
  useEffect(() => {
    api.get("/pacientes")
      .then(response => setPacientes(response.data))
      .catch(error => console.error(error));
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setNuevoPaciente({ ...nuevoPaciente, [e.target.name]: e.target.value });
  };

  // Enviar nuevo paciente
  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/pacientes", nuevoPaciente)
      .then(response => {
        setPacientes([...pacientes, response.data]);
        setNuevoPaciente({ 
          nombre: "", 
          apellido: "", 
          dni: "", 
          telefono: "", 
          email: "", 
          fechaNacimiento: "" 
        });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="pacientes-container">
      <h2>Listado de Pacientes</h2>
      <ul className="pacientes-list">
        {pacientes.map(p => (
          <li key={p.id}>
            {p.nombre} {p.apellido} - DNI: {p.dni} - Tel: {p.telefono} - Email: {p.email} - Nacimiento: {p.fechaNacimiento}
          </li>
        ))}
      </ul>

      <h3>Agregar Paciente</h3>
      <form className="paciente-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={nuevoPaciente.nombre}
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
            value={nuevoPaciente.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dni">DNI:</label>
          <input
            id="dni"
            type="text"
            name="dni"
            value={nuevoPaciente.dni}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            value={nuevoPaciente.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={nuevoPaciente.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
          <input
            id="fechaNacimiento"
            type="date"
            name="fechaNacimiento"
            value={nuevoPaciente.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Guardar</button>
      </form>
    </div>
  );
}

export default Pacientes;
