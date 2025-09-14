# Hello World React + Vite + Spring Boot Integration

This project demonstrates a full-stack application with a React + Vite frontend integrated with a Spring Boot backend.

## Project Structure

```
CascadeProjects/
├── hello-world-spring-boot/     # Spring Boot Backend (Port 8080)
│   ├── src/main/java/
│   │   └── com/example/helloworldspringboot/
│   │       ├── HelloWorldSpringBootApplication.java
│   │       ├── controller/
│   │       │   └── HelloWorldController.java
│   │       └── config/
│   │           └── CorsConfig.java
│   └── pom.xml
└── hello-world-frontend/        # React + Vite Frontend (Port 3000)
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    └── index.html
```

## Features

### Backend (Spring Boot)
- **Port**: 8080
- **Endpoints**:
  - `GET /` - Returns "Hello World from Spring Boot!"
  - `GET /hello` - Returns "Hello World!"
  - `GET /greet` - Returns "Greetings from your Spring Boot application!"
- **CORS Configuration**: Allows requests from `http://localhost:3000`

### Frontend (React + Vite)
- **Port**: 3000
- **Features**:
  - Interactive buttons to call each Spring Boot endpoint
  - Real-time display of API responses
  - Error handling for failed requests
  - Modern React with hooks (useState)
  - Axios for HTTP requests
  - Vite proxy configuration for API calls

## Prerequisites

- **Java 20** (already installed)
- **Node.js and npm** (already configured)
- **Maven** (using Maven wrapper)

## Running the Application

### 1. Start the Spring Boot Backend

```bash
cd C:\Users\NAVYA\CascadeProjects\hello-world-spring-boot
.\mvnw.cmd spring-boot:run
```

The backend will start on `http://localhost:8080`

### 2. Start the React Frontend

```bash
cd C:\Users\NAVYA\CascadeProjects\hello-world-frontend
npm run dev
```

The frontend will start on `http://localhost:3000`

## How It Works

1. **Frontend-Backend Communication**: 
   - React app makes HTTP requests to Spring Boot APIs
   - Vite proxy forwards `/api/*` requests to `http://localhost:8080`
   - CORS is configured to allow cross-origin requests

2. **API Integration**:
   - Click buttons in the React UI to call different endpoints
   - Responses are displayed in real-time
   - Error handling shows connection issues

3. **Development Setup**:
   - Hot reload enabled for both frontend and backend
   - Automatic dependency resolution
   - Cross-platform compatibility

## Testing the Integration

1. Ensure both applications are running
2. Open `http://localhost:3000` in your browser
3. Click the API buttons to test each endpoint:
   - "Call / (Root)" → Calls `http://localhost:8080/`
   - "Call /hello" → Calls `http://localhost:8080/hello`
   - "Call /greet" → Calls `http://localhost:8080/greet`

## API Endpoints

| Method | Endpoint | Response |
|--------|----------|----------|
| GET | `/` | "Hello World from Spring Boot!" |
| GET | `/hello` | "Hello World!" |
| GET | `/greet` | "Greetings from your Spring Boot application!" |

## Technology Stack

**Backend:**
- Spring Boot 2.7.18
- Java 20
- Maven
- Embedded Tomcat

**Frontend:**
- React 18.2.0
- Vite 4.5.0
- Axios 1.6.0
- Modern ES6+ JavaScript

## Configuration Files

- **vite.config.js**: Proxy configuration for API calls
- **CorsConfig.java**: CORS configuration for cross-origin requests
- **package.json**: Frontend dependencies and scripts
- **pom.xml**: Backend dependencies and build configuration

## Troubleshooting

- **CORS Issues**: Ensure CorsConfig.java allows `http://localhost:3000`
- **Port Conflicts**: Change ports in `vite.config.js` or `application.properties`
- **Dependency Issues**: Run `npm install` or `.\mvnw.cmd clean install`
