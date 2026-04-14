package com.PortafolioProyect.consultorio_proyect.repository;

import com.PortafolioProyect.consultorio_proyect.model.Profesional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesionalRepository extends JpaRepository<Profesional, Long> {
}
