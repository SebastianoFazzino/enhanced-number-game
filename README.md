# Enhanced Number Game

## Overview

This project features a full-stack number guessing game with a Java Spring Boot backend and an Angular 18 frontend. Players can place bets and guess numbers through a web interface, while the backend manages game logic and data processing.

## Key Features

- **Game Mechanics**: Players bet and guess a number between 1 and 100. The server generates a random number. If the player's number is higher, winnings are calculated based on the bet and the difference between the player's guess and the generated number.
- **Frontend**: User interface built with Angular 18, TypeScript, Bootstrap, and FontAwesome, providing a responsive and interactive experience.
- **Backend**: Java Spring Boot application with RESTful API for managing game logic, data validation, and backend services.
- **Integration**: Seamless connection between the Angular frontend and Spring Boot backend for a smooth gameplay experience.

## Technologies Used

### Frontend
- **Angular 18**: Framework for building dynamic web applications.
- **TypeScript**: For type safety and modern JavaScript features.
- **Bootstrap**: Framework for responsive design and styling.
- **FontAwesome**: Icon set for visual enhancements.

### Backend
- **Java 11**: The programming language used for the implementation.
- **Spring Boot 2.7.18**: Framework for building the RESTful API and application services.
- **JUnit 5**: Testing framework for unit and integration tests.
- **Mockito**: Framework for mocking and testing dependencies.
- **Validation API**: For ensuring data integrity in game inputs.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Summary Table](#summary-table)

## Features

### Game Mechanics
- **Gameplay**:
  1. Players send a number between 1 and 100 along with a bet amount.
  2. The server generates a random number in the same range.
  3. If the player's number is greater than the generated number, the win is calculated as: `bet * (99 / selectedNumber)`.
  4. The server returns the generated number, win status, and the amount won.

## Project Structure

### Backend

- **`src/main/java/`**: Main source code for backend services.
    - **`com.numbergame.controllers/`**: REST controller for handling game requests.
    - **`com.numbergame.exception/`**: Exception handling classes.
    - **`com.numbergame.models/`**: Domain models like `GameRound` and `GameResult`.
    - **`com.numbergame.services/`**: Contains the game logic and service implementations.
- **`src/test/java/`**: Contains test code.
    - **`com.numbergame.controllers/`**: Tests for the GameController.
    - **`com.numbergame.services/`**: Tests for the GameService.
    - **`com.numbergame.models/`**: Tests for the GameRound class.

### Frontend

- **`src/app/`**: Main source code for the Angular application.
    - **`pages/`**: Contains Angular components for the game UI.
    - **`services/`**: Contains services for communicating with the backend API.
    - **`models/`**: TypeScript models representing game data structures.

## Installation

To set up and run the project, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/SebastianoFazzino/enhanced-number-game.git
cd number-game
```
### 2. Install Dependencies

To set up and run the project, follow these steps:

#### Prerequisites

1. **[Maven](https://maven.apache.org/)** - The build tool used for managing dependencies and building the project.
2. **[Java 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)** - The Java Development Kit required to run the project.
3. **[Node.js and npm](https://nodejs.org/)** - JavaScript runtime and package manager for the frontend application.
4. **[Angular CLI](https://angular.io/cli)** - Command-line interface for Angular development.

#### Dependency Installation

Dependencies are managed via Maven and npm. You can install them by running:

```sh
cd backend
mvn install
```

```sh
cd frontend
npm install
```

### 3. Run the Backend Server

```sh
cd backend
mvn spring-boot:run
```

This command will start the application and expose the port 9125 for API requests.

### 4. Run the Frontend

```sh
cd frontend
ng serve
```

This command will compile the Angular application and start a development server. By default, the application will be accessible at [http://localhost:4200](http://localhost:4200).

### 5. Play the Game

Open your web browser and navigate to [http://localhost:4200](http://localhost:4200) to access the frontend application. Place your bet, your number and click "Play!" to see the results.


## Summary Table

| Step                              | Command                                                                                                |
|-----------------------------------|--------------------------------------------------------------------------------------------------------|
| **Clone the Repository**          | `git clone https://github.com/SebastianoFazzino/enhanced-number-game.git`<br>`cd enhanced-number-game` |
| **Install Java**                  | [Java Installation](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)              |
| **Install Maven**                 | [Maven Installation](https://maven.apache.org/install.html)                                            |
| **Install Node.js**               | [Node.js Installation](https://nodejs.org/en/download/)                                                |
| **Install Angular CLI**           | `npm install -g @angular/cli`                                                                          |
| **Install Backend Dependencies**  | `mvn install`<br>`mvn compile`                                                                         |
| **Run Backend**                   | `mvn spring-boot:run`                                                                                  |
| **Install Frontend Dependencies** | `npm install`                                                                                          |
| **Run Frontend**                  | `ng serve`                                                                                             |
| **Run Backend Tests**             | `mvn test`                                                                                             |


For a simplified version of this project check out [number-game](https://github.com/SebastianoFazzino/number-game.git).

