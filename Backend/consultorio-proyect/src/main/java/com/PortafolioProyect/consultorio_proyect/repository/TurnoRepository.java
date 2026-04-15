package com.PortafolioProyect.consultorio_proyect.repository;

import com.PortafolioProyect.consultorio_proyect.model.Paciente;
import com.PortafolioProyect.consultorio_proyect.model.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TurnoRepository extends JpaRepository<Turno, Long> {
}
