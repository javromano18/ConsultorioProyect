package com.PortafolioProyect.consultorio_proyect.service;

import com.PortafolioProyect.consultorio_proyect.model.Profesional;
import com.PortafolioProyect.consultorio_proyect.repository.PacienteRepository;
import com.PortafolioProyect.consultorio_proyect.repository.ProfesionalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfesionalService {
    private final ProfesionalRepository profesionalRepository;

    public ProfesionalService(ProfesionalRepository profesionalRepository) {
        this.profesionalRepository = profesionalRepository;
    }

    //Listar todos
    public List<Profesional> getAllProfesional(){
        return profesionalRepository.findAll();
    }

    //Listar por Id
    public Profesional getProfesionalById(Long id){
        return profesionalRepository.findById(id).orElse(null);
    }

    //Crear
    public Profesional createProfesional(Profesional p){
        return profesionalRepository.save(p);
    }

    //Actualizar
    public Profesional updateProfesional(Long id, Profesional p){
        Profesional exist = profesionalRepository.findById(id).orElse(null);
        if (exist != null){
            exist.setNombre(p.getNombre());
            exist.setApellido(p.getApellido());
            exist.setMatricula(p.getMatricula());
            exist.setEspecialidad(p.getEspecialidad());
            return profesionalRepository.save(exist);
        }
        return null;
    }

    //Eliminar
    public void deleteProfesional(Long id){
        profesionalRepository.deleteById(id);
    }
}
