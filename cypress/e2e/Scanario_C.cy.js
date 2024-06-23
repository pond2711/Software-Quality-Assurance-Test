/// <reference types="cypress" />

describe('search result', () => {

    before('Log in', () => {
        var email = '{your_email}';
        var password = '{your_password}';

        cy.visit('https://shopee.co.th/');
        cy.get(':nth-child(1) > .shopee-button-outline').click();
        cy.get('.F8zDuW > .gMTn3o > .Z7tNyT').type(email);
        cy.get('.L2QI3a > .gMTn3o > .Z7tNyT').type(password);
        cy.get('.vvOL40').click();

    })
    beforeEach('Search for keywords', () => {
        var keyword = 'babt toys';
        cy.visit('https://shopee.co.th/')
        cy.get('input:first').type(keyword);
        cy.get('[role = option]').should('contain', keyword);
        cy.get('[role = option]').first().should('have.text', "Search \"baby toys\" Shops");
    })
    it('TC-3-08 Sort by price', () => {
        cy.get('.shopee-search-item-result__item')
            .should('have.length.gt', 1)
            .then((items) => {
                cy.get('.text-base/5 truncate').should('have.length', items.length)
            })
    })

    cy.get('.text-base/5 truncate')
        .then(($prices) =>
            Cypress._.map($prices, (el) => el.innerText),
        )
        .should('be.an', 'array')
        .then((list) => {
            const sorted = Cypress._.sortBy(list)
            expect(sorted).to.deep.equal(list)
            sorted.forEach((price) => {
                expect(price).to.be.within(1, 1000)
            })
        })

    it('TC-3-15 check image', () => {
        cy.get('.relative.z-0.w-full.pt-full').should('have.class', 'w-full');
    })
})