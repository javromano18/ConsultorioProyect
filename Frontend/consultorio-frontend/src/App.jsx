import Pacientes from "./components/Pacientes";
import Profesionales from "./components/Profesionales";
import Turnos from "./components/Turnos"; 

function App() {
  return (
    <div>
      <h1>Consultorio Odontológico</h1>
      <Pacientes />
      <Profesionales />
      <Turnos /> 
    </div>
  );
}

export default App;
