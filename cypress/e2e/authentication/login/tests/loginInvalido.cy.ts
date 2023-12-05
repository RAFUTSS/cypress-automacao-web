import user from "../../../classes/user"

describe('Teste de login do Cypress.io', () => {

    let usuario = new user("fabio@fake.com","senha132");

    it('testeLoginInvalido', () => {
        cy.visit('https://cloud.cypress.io/login')
        cy.get('[class="btn btn-login btn-provider btn-provider-email btn-block"]').click()
        cy.get('[id="email"]').type(usuario.email)
        cy.get('[id="password"]').type(usuario.pass)
        cy.get('[type="submit"]').should('have.text', 'Log In').click()
        cy.get('[class="error-message"]').should('have.text', ' Incorrect email address or password')
    });
});