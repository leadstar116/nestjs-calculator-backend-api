NestJS Caculator Backend API

## Description
Implemented the calculator backend API in the simplest way with Nest.js. <br/>
The API only has one endpoint, POST /calculate.<br/>
Body contains
  - next: (string) the next number to be operated on with the total
  - total: (string) the running total
  - operation: (string) +, -, etc.

### Live Demo
https://nestjs-calculator-backend-api.herokuapp.com/api

## Installation

```bash
$ yarn install
```
### Environment configuration
Copy `.env.example -> .env`.

```bash
$ yarn migration:run
```

## Running the app

```bash
# start
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Open browser and visit `localhost:3001/api`.

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
