import { useEffect, useState } from "react";
import api from "../services/api";


function Profesionales() {
  const [profesionales, setProfesionales] = useState([]);
  const [nuevoProfesional, setNuevoProfesional] = useState({
    nombre: "",
    apellido: "",
    matricula: ""
  });

  useEffect(() => {
    api.get("/profesionales")
      .then(response => setProfesionales(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setNuevoProfesional({ ...nuevoProfesional, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/profesionales", nuevoProfesional)
      .then(response => {
        setProfesionales([...profesionales, response.data]);
        setNuevoProfesional({ nombre: "", apellido: "", matricula: "" });
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="profesionales-container">
      <h2>Listado de Profesionales</h2>
      <ul className="profesionales-list">
        {profesionales.map(p => (
          <li key={p.id}>
            {p.nombre} {p.apellido} - Matrícula: {p.matricula}
          </li>
        ))}
      </ul>

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

        <button type="submit" className="btn-submit">Guardar</button>
      </form>
    </div>
  );
}

export default Profesionales;
