describe('Testes de Pesquisas', function () {
    let url = "https://docs.cypress.io/guides/overview/why-cypress";
    const tempo = 5000;
      it('Teste de Pesquisa', function () {
        cy.visit(url);
        cy.wait(tempo);
        cy.get('.DocSearch-Button-Keys').click();
        cy.wait(tempo);
        cy.get('.DocSearch-Input').click().type('should');
        cy.wait(tempo);
        cy.get('.DocSearch-Hit-title').contains('should').click();
        cy.wait(tempo);
      });
    });
