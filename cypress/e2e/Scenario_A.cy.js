/// <reference types="cypress" />

describe('Language', () => {

  before('Log in', () => {
    var email = '{your_email}';
    var password = '{your_password}';

    cy.visit('https://shopee.co.th/');
    cy.get(':nth-child(1) > .shopee-button-outline').click();
    cy.get('.F8zDuW > .gMTn3o > .Z7tNyT').type(email);
    cy.get('.L2QI3a > .gMTn3o > .Z7tNyT').type(password);
    cy.get('.vvOL40').click();

  })
  it('TC-1-01 check for English language', () => {
    cy.visit('https://shopee.co.th/')
    cy.get('.ZNpneP').click()
    cy.get('[role = tooltip]').should('be.visible')
      .contains('English').click();
    cy.get('.N2uoVl').should('contain','English')
    cy.get('input:first').should('have.attr','placeholder','Search for products, brands and shops');
  })

})