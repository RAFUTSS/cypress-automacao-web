describe('Testes de Login', function () {
  let url = "https://cloud.cypress.io/login";
  
    it('Teste de Login', function () {
      let password = "Carro@123";
      let email = "bolado@gmail.com.br";
      cy.visit(url);
      cy.get('.btn-login.btn-provider.btn-provider-email').click();
      cy.get('#email').type(email);
      cy.get('#password').type(password);
      cy.get('.btn-primary').click();
      const dados = [   'Verify account',   'We sent an account verification email to',    'bolado@gmail.com.br',   '. Check your mailbox for further instructions.' ];
       for (let i = 0; i < dados.length; i++)
        {   cy.contains(dados[i]);
        
        };
    });
  });