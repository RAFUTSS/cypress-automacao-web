Feature: Login Invalido
  Scenario: Tentativa de Login com dados invãlidos
    Given que o usuário está na página de login
    When o usuário selecionou email como metodo de log in
    And o usuario insere o email invalido e a senha invalida
    And o usuário clica no botão "Log In"
    Then o sistema deve mostrar mensagem de erro, alertando sobre dados invalidos