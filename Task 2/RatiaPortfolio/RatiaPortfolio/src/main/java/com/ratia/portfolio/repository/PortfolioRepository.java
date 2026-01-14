/*
 * Copyright (c) RatiaICTSolutions Pty Ltd 2026.
 * All rights reserved.
 *
 */

package com.ratia.portfolio.repository;

import com.ratia.portfolio.model.portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

/**
RatiaPortfolio
*@author : Swatsi Bongani Ratia
*@date   : 2026/01/14
*@Java version: "21.0.3" 2024-04-16 LTS
*/

public interface PortfolioRepository extends JpaRepository<portfolio, Long> {
}
