Feature: Cadastro
  Scenario: Criação de email e senha
    Given página de criação de login do cypress
    When preenche campo de e-mail e senha validos
    And clica no botão para cadastrar
    Then retorna mensagem de e-mail cadastro