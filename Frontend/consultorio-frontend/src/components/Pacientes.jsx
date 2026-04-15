import { useEffect, useState } from "react";
import api from "../services/api";

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    api.get("/pacientes")
      .then(response => setPacientes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Listado de Pacientes</h2>
      <ul>
        {pacientes.map(p => (
          <li key={p.id}>
            {p.nombre} {p.apellido} - {p.dni}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pacientes;
