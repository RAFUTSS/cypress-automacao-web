# Projeto de automação cypress web
## Documentação da Estrutura e Padrões de Arquitetura do Projeto Cypress

### Padrões de Arquitetura
O projeto Cypress segue um conjunto de padrões de arquitetura para garantir organização, legibilidade e manutenção do código de teste. Os principais padrões a serem seguidos são os seguintes:

### Organização de Pastas
Todas as pastas devem seguir uma referência ao módulo/sub-módulo do sistema, garantindo uma estrutura clara e organizada.
Cada pasta deve ser nomeada de forma descritiva, identificando o módulo/sub-módulo ao qual está relacionada.
A estrutura de cada pasta deve ser a seguinte:
```
├── NomeDoModulo
│   ├── Funcionalidade
│   ├── Cenários
│   ├── Documentos
│   ├── Testes
```
- A pasta "Funcionalidade" deve conter códigos fontes relacionados à funcionalidade sendo testada.
- A pasta "Cenários" deve conter os cenários escritos em Gherkin.
- A pasta "Documentos" deve conter documentação relevante, como informações sobre as páginas, casos de teste e descrições de funcionalidades.
- A pasta "Testes" deve conter os arquivos de teste Cypress.

### Padrão de Nomenclatura de Arquivos

Todos os arquivos de testes devem seguir o padrão `.cy.ts`, indicando que são arquivos de teste Cypress utilizando o typescript.
Exemplo de nome de arquivo: `minhaFuncionalidade.cy.ts`.

### Arquivo README

Cada pasta deve conter um arquivo README, descrevendo os casos de teste e fornecendo informações relevantes sobre a funcionalidade.

### Legibilidade e Melhores Práticas

Todos os testes devem ser escritos de forma legível e seguir as melhores práticas de codificação conforme a documentação oficial do framework Cypress.
Certifique-se de usar boas práticas de escrita de código, como comentários, nomes de variáveis significativos e técnicas de estruturação adequada dos testes.

### Exemplo de Estrutura de Pastas
```
projeto-cypress
│
├── Login
│   ├── Cenários
│   ├── Documentos
│   ├── Testes
│
├── Logout
│   ├── Cenários
│   ├── Documentos
│   ├── Testes
│
├── Senha
│   ├── Cenários
│   ├── Documentos
│   ├── Testes
│
├── README.md
```
### Conclusão
Esta estrutura é uma padrão que deve ser seguido de como organizar seu projeto Cypress de acordo com a arquitetura descrita.

