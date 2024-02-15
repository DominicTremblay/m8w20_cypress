# End-to-End Testing with Cypress

## Agenda

* What is Cypress
* Cypress Setup
* Cypress Tests
  + First Tests
  + Performing actions on Todos
  + Form Validation
  + Network Request

### What is Cypress?

* Cypress is a modern, powerful, and versatile JavaScript-based end-to-end testing framework designed for web applications.
* It tests web application from the user perspective, simulating real user interactions
* It's developer friendly with visual user-friendly interface

### Recap of Types of Tests

* **Unit Tests**: These are used to test individual components or functions in isolation. They are typically fast to run and are useful for catching low-level bugs.

* **Integration Tests**: These tests check how multiple components or functions work together. They are useful for catching issues that might arise when different parts of your system interact.

* **End-to-End Tests**: These tests simulate real user scenarios. They cover the entire application from start to finish, testing the system as a whole. They are usually slower than unit and integration tests, but they provide the most accurate representation of user interactions.

## Setup

### Install Cypress

To install Cypress in your app directory

 `npm install -D cypress`

Note for WSL users:

* You need to install a X Server to be able to run Cypress in a browser
* There is a Compass activity explaining the installation

To run Cypress:

 `npx cypress open`

### When running Cypress:

1. it opens up the Cypress Electron app
2. it creates a Cypress folder with examples, fixtures, integration, support sub-folders
3. You can switch between installed browsers
4. Run the example files

* `Optionally, you can delete the example files`

## Best Practices

### Selectors

* Selectors can change by any number of people working on the code.
* Using a regular css selector can break your test down the line
* it is recommended to use data attributes to create the selector
* data attribute usually doesn't change over time
* we can crate attribute selectors. Ex.: `<h1 data-test="app-title">`

### Alias

### Using Aliases

* In the best practices, it explains that we cannot assigned selectors to variables like we would do in jQuery
* The reasons is Cypress commands are asynchronous and managed by Cypress
* It could cause the test to fail
* We using `aliases` instead
* It creates a closure around the selector

* [Best Practices](https://docs.cypress.io/guides/references/best-practices)

## Tests

* Cypress doesn't reinvent the wheel
* it uses all the tech you're used too such as mocha/chai and jQuery
* Read the doc to find the Cypress actions and Chai assertion

* [Cypress Guides](https://docs.cypress.io/guides/references/)

* We did quite a few tests to demonstrate how to test the UI from the user perspective

1. [Todos Tests](./demo/todo_app/cypress/e2e/0-my-tests/todos.cy.js)
2. [Form Validation](./demo/todo_app/cypress/e2e/0-my-tests/form.validation.cy.js)
3. [API Request](./demo/todo_app/cypress/e2e/0-my-tests/request.cy.js)
