import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pacientes from "./pages/Pacientes";
import Profesionales from "./pages/Profesionales";
import Turnos from "./pages/Turnos";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/pacientes">Pacientes</Link></li>
          <li><Link to="/profesionales">Profesionales</Link></li>
          <li><Link to="/turnos">Turnos</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/profesionales" element={<Profesionales />} />
        <Route path="/turnos" element={<Turnos />} />
      </Routes>
    </Router>
  );
}

export default App;
