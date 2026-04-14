package com.PortafolioProyect.consultorio_proyect.service;

import com.PortafolioProyect.consultorio_proyect.model.Paciente;
import com.PortafolioProyect.consultorio_proyect.repository.PacienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService {
    private final PacienteRepository pacienteRepository;

    public PacienteService(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    //Listar todos
    public List<Paciente> getAllPacientes(){
        return pacienteRepository.findAll();
    }

    //Listar por Id
    public Paciente getPacienteById(Long id){
        return pacienteRepository.findById(id).orElse(null);
    }

    //Crear
    public Paciente createPaciente(Paciente p){
        return pacienteRepository.save(p);
    }

    //Actualizar
    public Paciente updatePaciente(Long id, Paciente p){
        Paciente exist = pacienteRepository.findById(id).orElse(null);
        if (exist != null){
            exist.setNombre(p.getNombre());
            exist.setApellido(p.getApellido());
            exist.setDni(p.getDni());
            exist.setTelefono(p.getTelefono());
            exist.setEmail(p.getEmail());
            exist.setFechaNacimiento(p.getFechaNacimiento());
            return pacienteRepository.save(exist);
        }
        return null;
    }

    //Eliminar
    public void deletePaciente(Long id){
        pacienteRepository.deleteById(id);
    }
}
