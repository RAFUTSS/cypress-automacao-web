# Projeto de automação cypress web
## Documentação da Estrutura e Padrões de Arquitetura do Projeto Cypress

### Padrões de Arquitetura

O projeto Cypress deve aderir a um conjunto de padrões de arquitetura para assegurar organização, legibilidade e manutenção do código de teste. Abaixo, segue os principais padrões a serem seguidos:

Organização de Pastas:

Todas as pastas devem seguir uma referência ao módulo/sub-módulo do sistema, garantindo uma estrutura clara e organizada.

Cada pasta deve ser nomeada de forma descritiva, identificando o módulo/sub-módulo ao qual está relacionada.

Padrão de Nomenclatura:

As pastas devem conter subpastas que representem funcionalidade, documentação, cenários e testes.

A estrutura de cada pasta deve ser a seguinte:

├── NomeDoModulo
│   ├── Funcionalidade
│   ├── Cenários
│   ├── Documentos
│   ├── Testes

A pasta "Funcionalidade" deve conter códigos fontes relacionados à funcionalidade sendo testada.

A pasta "Cenários" deve conter os cenários escritos em gherkin.

A pasta "Documentos" deve conter documentação relevante, como informações sobre as páginas, casos de teste e descrições de funcionalidades.

A pasta "Testes" deve conter os arquivos de teste Cypress.

Padrão de Nomenclatura de Arquivos:

Todos os arquivos de teste devem seguir o padrão .cy.ts, indicando que são arquivos de teste Cypress.

Exemplo de nome de arquivo: minhaFuncionalidade.cy.ts.

Arquivo README:

Cada pasta deve conter um arquivo README, descrevendo os casos de teste e fornecendo informações relevantes sobre a funcionalidade.

Legibilidade e Melhores Práticas:

Todos os testes devem ser escritos de forma legível e seguir as melhores práticas de codificação conforme a documentação oficial do framework Cypress.

Certifique-se de usar boas práticas de escrita de código, como comentários, nomes de variáveis significativos e técnicas de estruturação adequada dos testes.

Exemplo de Estrutura de Pastas

projeto-cypress
│
├── Login
│   ├── Cenários
│   ├── Documentos
│   ├── Testes
│
├── Logout
│   ├── Cenários
│   ├── Documentos
│   ├── Testes
│
├── Senha
│   ├── Cenários
│   ├── Documentos
│   ├── Testes
│
├── README.md

Esta estrutura é um exemplo de como organizar seu projeto Cypress de acordo com os padrões de arquitetura descritos. Certifique-se de adaptá-la de acordo com as necessidades do seu projeto.

Gherkin

É recomendado o uso da linguagem Gherkin para criar cenários de teste de forma mais descritiva e legível.

Exemplo de cenário em Gherkin:

Feature: Login
Scenario: Login efetuado com sucesso
  Given que o usuário está na página de login
  When o usuário insere o nome de usuário "usuario123" e a senha "senha123"
  And o usuário clica no botão "Entrar"
  Then o sistema deve redirecionar o usuário para a página inicial

Repositório GitHub

O projeto Cypress deve ser hospedado em um repositório no GitHub para controle de versão e colaboração.

Cada tarefa deve ser criada em uma Branch específica, seguindo um padrão de nomenclatura descritivo.

Após a finalização de uma tarefa, um Pull Request (PR) deve ser criada para que um revisor responsável analise as modificações e, se aprovadas, faça o merge da branch na branch principal (normalmente dev ou develop).

Certifique-se de seguir as melhores práticas ao trabalhar com branches, MRs e revisões de código no GitHub para garantir um processo de desenvolvimento suave e colaborativo.
