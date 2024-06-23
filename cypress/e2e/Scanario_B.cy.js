/// <reference types="cypress" />

describe('Search for keywords', () => {

  before('Log in', () => {
    var email = '{your_email}';
    var password = '{your_password}';

    cy.visit('https://shopee.co.th/');
    cy.get(':nth-child(1) > .shopee-button-outline').click();
    cy.get('.F8zDuW > .gMTn3o > .Z7tNyT').type(email);
    cy.get('.L2QI3a > .gMTn3o > .Z7tNyT').type(password);
    cy.get('.vvOL40').click();

  })
  it('TC-2-01 check for auto search', () => {
    var keyword = 'babt toys';
    cy.visit('https://shopee.co.th/')
    cy.get('input:first').type(keyword);
    cy.get('[role = option]').should('contain', keyword);
    cy.get('[role = option]').first().should('have.text', "Search \"baby toys\" Shops");
  })

})