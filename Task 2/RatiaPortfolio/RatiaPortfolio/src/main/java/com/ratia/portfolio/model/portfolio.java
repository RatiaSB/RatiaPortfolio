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
public class portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String projectName;
    private String description;
    private String techStack;

    public portfolio() {

    }

    public portfolio(String projectName, String description, String techStack) {
        this.projectName = projectName;
        this.description = description;
        this.techStack = techStack;
    }

    public String getProjectName() {
        return projectName;
    }

    public portfolio setProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public portfolio setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getTechStack() {
        return techStack;
    }

    public portfolio setTechStack(String techStack) {
        this.techStack = techStack;
        return this;
    }
}
