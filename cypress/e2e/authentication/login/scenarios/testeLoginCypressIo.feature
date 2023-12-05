Feature: Login Inválido
  Scenario: Tentativa de Login com dados inválidos
    Given que o usuário está na página de login
    When o usuário selecionou email como método de log in
    And o usuário insere o email e senha inválidos
    And o usuário clica no botão "Log In"
    Then o sistema deve mostrar mensagem de erro, alertando sobre dados inválidos