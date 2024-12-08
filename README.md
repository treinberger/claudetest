# Raffle System

A web-based raffle system that allows users to participate in raffles by answering questions and optionally purchasing additional winning chances with virtual currency (APoints).

## Features

### User Features
- Participate in available raffles
- View active raffles with teaser images
- Purchase additional winning chances using APoints
- Receive email notifications upon winning
- View participation history

### Administrative Features
- Create and manage raffles
- Manage user accounts
- Conduct raffle draws
- Access winner lists and exports

## Technology Stack

### Backend
- Spring Boot 2.7.0
- Spring Security with JWT
- SQLite Database
- OpenAPI/Swagger Documentation

### Frontend
- Angular 14
- ng-aquila UI library
- Angular Reactive Forms
- RxJS

## Getting Started

### Prerequisites
- Java 11
- Node.js 14+
- npm 6+

### Backend Setup
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Access URLs
- Frontend: http://localhost:4200
- Backend API: http://localhost:8080/api
- Swagger UI: http://localhost:8080/swagger-ui.html

## Documentation
For detailed documentation, please refer to the `docs` directory.