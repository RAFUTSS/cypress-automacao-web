Workflow tem o script usado para executar a integração contínua de um projeto que usa Node.js e Cypress. Ele é ativado quando um pull request é aberto no GitHub. O script segue os seguintes passos:

- Faz o checkout do código fonte do projeto usando a ação actions/checkout@v3
- Configura o ambiente Node.js usando a ação actions/setup-node@v2, especificando a versão 16 do Node.js
- Executa os comandos npm install e npx cypress run, que instalam as dependências do projeto e rodam os testes do Cypress, respectivamente.
