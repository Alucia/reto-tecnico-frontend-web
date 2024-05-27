# BankingAppJsonServer

## CONTEXTO

En un banco de renombre que busca mejorar su presencia en línea y ofrecer a los clientes una experiencia bancaria más eficiente y personalizada, la empresa ha decidido implementar una aplicación web. Tu tarea consiste en desarrollar la mejor experiencia de usuario en las siguientes áreas clave.

## OBJETIVO

Desarrollar un sistema bancario que permita a los usuarios realizar operaciones bancarias y gestionar sus cuentas.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Run Mock-server

Run `npm run mock:server` to execute local api in (http://localhost:3000/api/).

## API Routes

### User Routes

- GET `users/all`: Get all users
- PUT `users/new`: Create a new user
- GET `users/:idUser`: Get a user by ID

### Balance Routes

- GET `balances/all`: Get all balances
- GET `balances/:idUser`: Get a balance by user ID

### Transactions Routes

- GET `transactions/all`: Get all transactions
- GET `transactions/:idAccount`: Get transactions by account ID