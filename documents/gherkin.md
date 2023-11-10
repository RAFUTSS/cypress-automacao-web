# Escrita de Cenários Gherkin

## Introdução

A escrita de cenários em Gherkin é uma parte essencial da automação de testes com o framework Cypress. Gherkin é uma linguagem de formatação que facilita a criação de cenários de teste de forma descritiva e legível. Neste guia, você aprenderá como escrever cenários Gherkin e criar arquivos .feature para seus testes.

## Gherkin Básico

Gherkin é uma linguagem baseada em comportamento (BDD) que permite descrever o comportamento desejado de um sistema em termos de cenários. A linguagem Gherkin é composta por palavras-chave, como `Feature`, `Scenario`, `Given`, `When`, `Then`, `And`, e `But`. Aqui está um exemplo básico:

```gherkin
Feature: Login
  Scenario: Login efetuado com sucesso
    Given que o usuário está na página de login
    When o usuário insere o nome de usuário "usuario123" e a senha "senha123"
    And o usuário clica no botão "Entrar"
    Then o sistema deve redirecionar o usuário para a página inicial
```
Neste exemplo, a estrutura básica inclui:

Feature: Descreve a funcionalidade ou recurso que está sendo testado.
Scenario: Descreve um cenário de teste específico.
Given, When, Then: São passos que descrevem o comportamento do sistema em linguagem natural.
And: Pode ser usado para adicionar mais passos na mesma categoria.

Criando Arquivos .feature
Os cenários Gherkin geralmente são armazenados em arquivos com a extensão .feature. Aqui está como você pode criar um arquivo .feature:

Dentro da pasta de teste do seu projeto Cypress, crie um novo arquivo com a extensão .feature. Por exemplo, meuTeste.feature.

Abra o arquivo .feature em um editor de texto.

Comece a escrever seus cenários Gherkin no arquivo .feature.

Padrão de Escrita
Ao escrever cenários Gherkin, é importante seguir um padrão consistente para garantir a legibilidade e manutenção dos testes. Alguns pontos a considerar incluem:

Seja descritivo e claro em seus cenários.
Use nomes de passos significativos.
Evite repetições.
Mantenha seus cenários curtos e focados em um único aspecto do comportamento.
Aqui está um exemplo de cenário bem escrito:
```gherkin
Feature: Carrinho de Compras
  Scenario: Adicionar um item ao carrinho
    Given que o usuário está na página de produtos
    When o usuário clica no botão "Adicionar ao Carrinho" do produto "Camiseta"
    Then o item "Camiseta" deve ser exibido no carrinho de compras
```
## Conclusão
A escrita de cenários Gherkin é uma prática essencial para o desenvolvimento de testes automatizados com o Cypress. Seguindo as diretrizes de formatação e padrões de escrita, você pode criar cenários de teste descritivos e legíveis que ajudam a validar o comportamento da sua aplicação.

Lembre-se de que a consistência e a clareza são fundamentais ao escrever cenários Gherkin, o que tornará seus testes mais eficazes e fáceis de manter.

