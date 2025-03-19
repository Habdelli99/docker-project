# Project Management System with MERN Stack and GraphQL

**Developer**: Hamza Abdelli 
**Class**: TD47  
**Course**: ESIEA 4A-IASD 2024-2025 
**Project**: Microservices Application with Docker

## Project Overview

This project is a comprehensive solution for the final assignment in the Containerization and Virtualization course. It demonstrates the implementation of a microservices architecture using Docker, featuring a full-stack application for managing clients and their projects.

### Key Features

- Client Management (CRUD operations)
- Project Management with status tracking
- GraphQL API for efficient data querying
- Containerized microservices architecture
- Modern responsive UI

## Technical Stack

- **Frontend**: React.js with Bootstrap
- **Backend**: Node.js with Express and GraphQL
- **Database**: MongoDB
- **Containerization**: Docker and Docker Compose

## Project Structure

```
project/
├── client/                 # Frontend React application
│   ├── src/               # Source code
│   └── Dockerfile         # Frontend container configuration
├── server/                # Backend Node.js application
│   ├── models/           # MongoDB models
│   ├── schema/           # GraphQL schema
│   └── Dockerfile        # Backend container configuration
└── docker-compose.yml    # Services orchestration
```

## Prerequisites

- Docker
- Docker Compose

## Installation and Running

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Start the application using Docker Compose:
```bash
docker-compose up -d --build
```

3. Access the application:
- Frontend: http://localhost:3000
- GraphQL Playground: http://localhost:5000/graphql

## API Endpoints (GraphQL)

### Queries
- `clients`: Get all clients
- `client(id: ID!)`: Get a specific client
- `projects`: Get all projects
- `project(id: ID!)`: Get a specific project

### Mutations
- `addClient`: Create a new client
- `deleteClient`: Remove a client and their projects
- `addProject`: Create a new project
- `updateProject`: Update project details
- `deleteProject`: Remove a project

## Development Notes

This project fulfills all requirements of the course assignment:
- Microservices architecture
- Docker containerization
- API implementation
- Database integration
- Frontend user interface
- Service orchestration with Docker Compose

## Stopping the Application

To stop the application and remove containers:
```bash
docker-compose down
```

## Author

Developed by Hamza Abdelli as part of the ESIEA 4A-IASD curriculum, TD47 class.
