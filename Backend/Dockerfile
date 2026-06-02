# ===== STAGE 1: BUILD APPLICATION =====

# Use Maven + Java image to build the project
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Create working directory inside container
WORKDIR /app

# Copy all backend files into container
COPY . .

# Build Spring Boot project and skip tests
RUN mvn clean package -DskipTests


# ===== STAGE 2: RUN APPLICATION =====

# Lightweight Java runtime image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy generated JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Spring Boot runs on port 8080
EXPOSE 8080

# Command to start Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]