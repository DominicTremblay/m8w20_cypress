/// <reference types="cypress" />

describe('API Requests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="todo-list"] li').as('todoItem');
  });

  it('posts a new todo', () => {
    cy.intercept('POST', '/api/todos', {
      statusCode: 201,
      body: { id: 5, task: 'Jump on Goombas', completed: false },
    }).as('postTodo');

    cy.get('[data-test="todo-form"]').as('todoForm');
    cy.get('@todoForm').find('#todo-input').type('Jump on Goombas');
    cy.get('@todoForm').submit();
    cy.wait('@postTodo').its('response.body').should('deep.equal', {
      id: 5,
      task: 'Jump on Goombas',
      completed: false,
    });
    cy.get('@todoItem').should('have.length', 5);
  });

  it('deletes a todo', () => {
    cy.intercept('DELETE', '/api/todos/*', {
      statusCode: 204,
    }).as('deleteTodo');

    cy.get('@todoItem').last().find('button').click();
    cy.wait('@deleteTodo');
    cy.get('@todoItem').should('have.length', 3);
    cy.get('@todoItem')
      .last()
      .contains('Break a Brick Block')
      .should('not.exist');
  });
});
