# End-to-End Testing with Cypress

## Agenda

* What is Cypress
* Cypress Setup
* Cypress Tests
  + First Tests
  + Form Validation
  + Network Request
  + Performing actions on Todos
  + Search

## What is Cypress?

* Cypress is a modern, powerful, and versatile JavaScript-based end-to-end testing framework designed for web applications.
* It tests web application from the user perspective, simulating real user interactions
* It's developer friendly with visual user-friendly interface

### Recap of types of test

### Recap of Types of Tests

* **Unit Tests**: These are used to test individual components or functions in isolation. They are typically fast to run and are useful for catching low-level bugs.

* **Integration Tests**: These tests check how multiple components or functions work together. They are useful for catching issues that might arise when different parts of your system interact.

* **End-to-End Tests**: These tests simulate real user scenarios. They cover the entire application from start to finish, testing the system as a whole. They are usually slower than unit and integration tests, but they provide the most accurate representation of user interactions.

## Cypress Setup

To install Cypress for your app

`npm install -g cypress@9.7.0`

Note for WSL users:

- You need to install a X Server to be able to run Cypress in a browser
- There is a Compass activity explaining the installation


When running Cypress:

1. it opens up the Cypress Electron app
2. it creates a Cypress folder with fixtures, integration, plugins, support sub-folders
3. You can switch between installed browsers

* `You can delete the example files`

## Cypress Syntax

* Cypress syntax should feel very familiar
* Cypress uses the same syntax as Mocha and Chai
  + Same `describe`,           `it`, and `beforeEach` blocks, 
  + `cy` object with methods. It's asynchronous.
* Create same selectors as in `jQuery`
* Chaining of methods

* Selector Playground - Gives you the possible selector to use
* Change the viewport in `cypress.json`

## debugging

* Pin => put it on the console

## Selectors

 - Selectors might be changed by others or process
 - General recommendation is to use data attributes, because there is less chance of being changed.
 - Selectors cannot be assigned to variables because it's async

* `cy.visit(url)` Tell Cypress to visit a page (relative to baseUrl)
* `cy.get` to create any selectors
* `cy.contains` to check if a string is on the page
* `should('exist')`,         `should('not.exist')`
* `cy.wrap()` This allows you to use Cypress's chainable methods on entities that are not originally Cypress chainable objects. It also creates a closure.
* `cy.get(selector).as('alias')` Using alias. it creates an object. Needs invoke (method) or its (properties). useful to put these selectors in a beforeEach block

* testing range, select, checkboxes or radio buttons

* [cypress scheatsheet](https://cheatography.com/aiqbal/cheat-sheets/cypress-io/)

## Form Validation

* how to validate a form entry

## Tasks

* seeding the db

* note: plugins should not be covered

## Network Request

* `cy.intercept`
* you might want to make sure the API got called
* give an alias to the intercept
* you can use fixtures (dummy data that Cypress will use)

* `cy.intercept(url)`
* `cy.intercept(method, url)`
* `cy.intercept(routeMatcher)`
* `cy.intercept('GET', '/activities/*', {fixture: 'activities,json'})`

* Stub out a static response

* `cy.intercept(url, staticResponse)`
* `cy.intercept(method, url, staticResponse)`
* `cy.intercept(routeMatcher, url)`
* `cy.intercept(url, routeMatcher, url)`

ex:

```js
cy.intercept('/workflows', {
    body: [{
        workflow: 1
    }, {
        workflow: 2
    }]
})

cy.intercept('/not-found', {
    statusCode: 404,
    body: '404 Not Found',
    headers: {
        'x-not-found': 'true'
    }
})
```

## Testing Search
