package com.PortafolioProyect.consultorio_proyect.controller;

import com.PortafolioProyect.consultorio_proyect.model.Paciente;
import com.PortafolioProyect.consultorio_proyect.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {
    private final PacienteService pacienteService;

    @Autowired
    public PacienteController(PacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @GetMapping
    public List<Paciente> getAllPaciente(){
        return pacienteService.getAllPacientes();
    }

    @GetMapping("/{id}")
    public Paciente getPacienteById(@PathVariable Long id){
        return pacienteService.getPacienteById(id);
    }

    @PostMapping
    public Paciente createPaciente(@RequestBody Paciente p){
        return pacienteService.createPaciente(p);
    }

    @PutMapping("/{id}")
    public Paciente updatePaciente(@PathVariable Long id, @RequestBody Paciente p){
        return pacienteService.updatePaciente(id, p);
    }

    @DeleteMapping("/{id}")
    public void deletePaciente(@PathVariable Long id){
        pacienteService.deletePaciente(id);
    }
}
