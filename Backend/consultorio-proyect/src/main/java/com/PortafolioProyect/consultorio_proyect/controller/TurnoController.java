package com.PortafolioProyect.consultorio_proyect.controller;

import com.PortafolioProyect.consultorio_proyect.model.Turno;
import com.PortafolioProyect.consultorio_proyect.service.TurnoService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/turnos")
public class TurnoController {
    private final TurnoService turnoService;

    public TurnoController(TurnoService turnoService) {
        this.turnoService = turnoService;
    }

    @GetMapping
    public List<Turno> getAllTurnos(){
        return turnoService.getAllTurnos();
    }

    @GetMapping("/{id}")
    public Turno getTurnoById(@PathVariable Long id){
        return turnoService.getTurnoById(id);
    }

    @PostMapping
    public Turno createTurno(@RequestBody Turno t){
        return turnoService.createTurno(t);
    }

    @PutMapping("/{id}")
    public Turno updateTurno(@PathVariable Long id, @RequestBody Turno t){
        return turnoService.updateTurno(id, t);
    }

    @DeleteMapping("/{id}")
    public void deleteTurno(@PathVariable Long id){
        turnoService.deleteTurno(id);
    }
}
