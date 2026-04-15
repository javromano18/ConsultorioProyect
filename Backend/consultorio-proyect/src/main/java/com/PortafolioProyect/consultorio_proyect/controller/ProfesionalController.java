package com.PortafolioProyect.consultorio_proyect.controller;

import com.PortafolioProyect.consultorio_proyect.model.Profesional;
import com.PortafolioProyect.consultorio_proyect.service.ProfesionalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/profesionales")
public class ProfesionalController {
    private final ProfesionalService profesionalService;

    public ProfesionalController(ProfesionalService profesionalService) {
        this.profesionalService = profesionalService;
    }

    @GetMapping
    public List<Profesional> getAllProfesional(){
        return profesionalService.getAllProfesional();
    }

    @GetMapping("/{id}")
    public Profesional getProfesionalById(@PathVariable Long id){
        return profesionalService.getProfesionalById(id);
    }

    @PostMapping
    public Profesional createProfesional(@RequestBody Profesional p){
        return profesionalService.createProfesional(p);
    }

    @PutMapping("/{id}")
    public Profesional updateProfesional(@PathVariable Long id, @RequestBody Profesional p){
        return profesionalService.updateProfesional(id, p);
    }

    @DeleteMapping("/{id}")
    public void deleteProfesional(@PathVariable Long id){
        profesionalService.deleteProfesional(id);
    }
}
