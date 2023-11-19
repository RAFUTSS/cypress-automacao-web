Feature: Pesquisa
  Scenario: Pesquisa em documentação do cypress
    Given Na página de domentação cypress
    When clica search
    And Digita palavra should
    Then Confirma conter palavra pesquisa