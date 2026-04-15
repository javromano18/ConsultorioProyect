package com.PortafolioProyect.consultorio_proyect.service;

import com.PortafolioProyect.consultorio_proyect.model.Paciente;
import com.PortafolioProyect.consultorio_proyect.model.Turno;
import com.PortafolioProyect.consultorio_proyect.repository.TurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurnoService {
    private final TurnoRepository turnoRepository;

    public TurnoService(TurnoRepository turnoRepository) {
        this.turnoRepository = turnoRepository;
    }

    //Listar todos
    public List<Turno> getAllTurnos(){
        return turnoRepository.findAll();
    }

    //Listar por Id
    public Turno getTurnoById(Long id){
        return turnoRepository.findById(id).orElse(null);
    }

    //Crear
    public Turno createTurno(Turno t){
        return turnoRepository.save(t);
    }

    //Actualizar
    public Turno updateTurno(Long id, Turno t){
        Turno exist = turnoRepository.findById(id).orElse(null);
        if (exist != null){
            exist.setFecha(t.getFecha());
            exist.setHora(t.getHora());
            exist.setPaciente(t.getPaciente());
            exist.setProfesional(t.getProfesional());
            exist.setEstado(t.getEstado());
            return turnoRepository.save(exist);
        }
        return null;
    }

    //Eliminar
    public void deleteTurno(Long id){
        turnoRepository.deleteById(id);
    }
}
