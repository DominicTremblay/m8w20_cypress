/// <reference types="cypress" />

describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="todo-list"] li').as('todoItem');
  });

  it('Displays the title correcly', () => {
    cy.get('[data-test="app-title"]').contains(`Mario's Todos`);
  });

  it('Shows the correct number of default todos', () => {
    cy.get('@todoItem').should('have.length', 4);
    cy.get('@todoItem').should('have.length', 4);
    cy.get('@todoItem').first().contains('Power Star');
    cy.get('@todoItem').last().contains('Brick Block');
  });

  it('Adds a new todo', () => {
    cy.get('[data-test="todo-form"]').as('todoForm');
    cy.get('@todoForm').find('#todo-input').type('Jump on Goombas');
    cy.get('@todoForm').submit();
    cy.get('@todoItem').should('have.length', 5);
    cy.get('@todoItem').last().contains('Jump on Goombas');
  });

  it('Marks a todo as completed', () => {
    cy.get('@todoItem').first().find('input[type="checkbox"]').check();

    cy.get('@todoItem')
      .first()
      .find('label')
      .should('have.css', 'text-decoration-line', 'line-through');

    cy.get('@todoItem')
      .first()
      .find('label')
      .should('have.css', 'text-decoration-color', 'rgb(255, 0, 0)');
  });

  it('checks the number of completed todo', () => {
    cy.get('@todoItem').find('input[type="checkbox"]').first().check();
    cy.get('@todoItem').find('input[type="checkbox"]').last().check();
    cy.get('@todoItem')
      .find('input[type="checkbox"]:checked')
      .should('have.length', 2);
  });

  it('Deletes a todo', () => {
    cy.get('@todoItem')
      .first()
      .then(($firstTodo) => {
        cy.wrap($firstTodo).find('button').click();
        cy.get('@todoItem').should('have.length', 3);
        cy.wrap($firstTodo).should('not.exist');
      });
    cy.get('@todoItem').first().contains('Princess Peach');
  });
});
