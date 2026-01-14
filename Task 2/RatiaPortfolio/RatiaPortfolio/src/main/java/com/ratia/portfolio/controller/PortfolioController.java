/*
 * Copyright (c) RatiaICTSolutions Pty Ltd 2026.
 * All rights reserved.
 *
 */

package com.ratia.portfolio.controller;

import com.ratia.portfolio.model.Portfolio;
import com.ratia.portfolio.service.PortfolioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * RatiaPortfolio
 *
 * @author : Swatsi Bongani Ratia
 * @date : 2026/01/14
 * @Java version: "21.0.3" 2024-04-16 LTS
 */
@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "*")
public class PortfolioController {
    private PortfolioService service;

    public PortfolioController(PortfolioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Portfolio> getAllProjects(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Portfolio getProject(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping
    public Portfolio createProject(@RequestBody Portfolio portfolio){
        return service.save(portfolio);
    }

    @PostMapping("/{id}")
    public Portfolio updateProject(@PathVariable Long id, @RequestBody Portfolio portfolio){
        return service.update(id, portfolio);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id){
        service.deleteById(id);
    }

}
