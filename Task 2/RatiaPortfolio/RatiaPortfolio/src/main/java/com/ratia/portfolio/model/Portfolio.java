/*
 * Copyright (c) RatiaICTSolutions Pty Ltd 2026.
 * All rights reserved.
 *
 */

package com.ratia.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/**
 * RatiaPortfolio
 *
 * @author : Swatsi Bongani Ratia
 * @date : 2026/01/14
 * @Java version: "21.0.3" 2024-04-16 LTS
 */
@Entity
public class Portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectName;
    private String description;
    private String techStack;

    public Portfolio() {

    }

    public Portfolio(String projectName, String description, String techStack) {
        this.projectName = projectName;
        this.description = description;
        this.techStack = techStack;
    }

    public Long getId() {
        return id;
    }

    public String getProjectName() {
        return projectName;
    }

    public Portfolio setProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Portfolio setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getTechStack() {
        return techStack;
    }

    public Portfolio setTechStack(String techStack) {
        this.techStack = techStack;
        return this;
    }
}
