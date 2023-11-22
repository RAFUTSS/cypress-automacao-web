describe('Teste de login do Cypress.io', () => {

    it('testeLoginInvalido', () => {
        cy.visit('https://cloud.cypress.io/login')
        cy.get('[class="btn btn-login btn-provider btn-provider-email btn-block"]').click()
        cy.get('[id="email"]').type('usuario123@fake.com')
        cy.get('[id="password"]').type('senha123')
        cy.get('[type="submit"]').should('have.text', 'Log In').click()
        cy.get('[class="error-message"]').should('have.text', ' Incorrect email address or password')
    })
})