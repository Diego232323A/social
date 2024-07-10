# My Microservices Project

Welcome to the My Microservices Project repository. This project is a demonstration of a basic microservices architecture using Node.js and Docker.

## Project Structure

The repository is organized as follows:

- **microservice1/**: Contains the code for Microservice 1.
  - **Dockerfile**: Defines the Docker image for Microservice 1.
  - **package.json**: Node.js dependencies and configuration for Microservice 1.
  - **index.js**: Main entry point for Microservice 1.

- **microservice2/**: Contains the code for Microservice 2.
  - **Dockerfile**: Defines the Docker image for Microservice 2.
  - **package.json**: Node.js dependencies and configuration for Microservice 2.
  - **index.js**: Main entry point for Microservice 2.

- **microservice3/**: Contains the code for Microservice 3.
  - **Dockerfile**: Defines the Docker image for Microservice 3.
  - **package.json**: Node.js dependencies and configuration for Microservice 3.
  - **index.js**: Main entry point for Microservice 3.

- **docker-compose.yml**: Docker Compose configuration file to orchestrate the microservices.

## Technologies Used

- **Backend**: Node.js
- **Containerization**: Docker
- **Orchestration**: Docker Compose

## Installation and Setup

### Prerequisites

- Node.js (version 12.x or higher)
- Docker

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/diego232323a/social.git
   cd my-microservices-project

2. Navegar a Cada Microservicio, Instalar Dependencias y Ejecutar

User Service
    cd user-service
    npm install
    npm start

Post Service
    cd post-service
    npm install
    npm start

Comment Service
    cd comment-service
    npm install
    npm start

### Paso 3: Acceder a los Endpoints

User Service: http://localhost:3001/api/user
Post Service: http://localhost:3002/api/post
Comment Service: http://localhost:3003/api/comment