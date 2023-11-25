Feature: Login
  Scenario: Login efetuado com sucesso
    Given página de login do cypress
    When preenche campo de e-mail e senha validos
    And efetua cadastro do e-mail
    Then retorna mensagem de e-mail cadastro