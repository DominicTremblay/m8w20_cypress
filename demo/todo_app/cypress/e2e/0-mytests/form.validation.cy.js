/// <reference types="cypress" />

describe('Todo Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the focus when it loads', () => {
    cy.get('[data-test="todo-form"]').as('todoForm');
    cy.get('@todoForm').find('#todo-input').should('have.focus');
  });

  it('resets the form input', () => {
    cy.get('[data-test="todo-form"]').as('todoForm');
    cy.get('@todoForm').find('#todo-input').type('Jump on Goombas');
    cy.get('@todoForm').submit();
    cy.get('@todoForm').find('#todo-input').should('have.value', '');
  });

  it('shows an error message when the input is empty', () => {
    cy.get('[data-test="todo-form"]').as('todoForm');
    cy.get('@todoForm').submit();
    cy.get('[data-test="form-error"]').contains('Please enter a todo');
  });
});
