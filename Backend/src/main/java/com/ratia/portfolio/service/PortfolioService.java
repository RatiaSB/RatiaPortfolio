/*
 * Copyright (c) RatiaICTSolutions Pty Ltd 2026.
 * All rights reserved.
 *
 */

package com.ratia.portfolio.service;

import com.ratia.portfolio.model.Portfolio;
import com.ratia.portfolio.repository.PortfolioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * RatiaPortfolio
 *
 * @author : Swatsi Bongani Ratia
 * @date : 2026/01/14
 * @Java version: "21.0.3" 2024-04-16 LTS
 */
@Service
public class PortfolioService {
  private final PortfolioRepository repository;

    public PortfolioService(PortfolioRepository repository) {
        this.repository = repository;
    }

    public List<Portfolio> getAll(){
        return repository.findAll();
    }

    public Portfolio getById(Long id){
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found"));
    }

    public Portfolio save(Portfolio portfolio){
        return repository.save(portfolio);
    }

    public Portfolio update(Long id, Portfolio portfolio){
        Portfolio existing = getById(id);
        existing.setProjectName(portfolio.getProjectName());
        existing.setDescription(portfolio.getDescription());
        existing.setTechStack(portfolio.getTechStack());
        return repository.save(existing);
    }

    public void deleteById(Long id){
        repository.deleteById(id);
    }
}
