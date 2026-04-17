import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Pacientes from "./pages/Pacientes";
import Profesionales from "./pages/Profesionales";
import Turnos from "./pages/Turnos";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <header className="app-header">
        <div className="logo">Consultorio</div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/pacientes" className={({ isActive }) => isActive ? "active" : ""}>Pacientes</NavLink>
            </li>
            <li>
              <NavLink to="/profesionales" className={({ isActive }) => isActive ? "active" : ""}>Profesionales</NavLink>
            </li>
            <li>
              <NavLink to="/turnos" className={({ isActive }) => isActive ? "active" : ""}>Turnos</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/profesionales" element={<Profesionales />} />
          <Route path="/turnos" element={<Turnos />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
