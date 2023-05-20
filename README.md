# FILMES COM PROTAGONISMO NEGRO -  BANCO DE DADOS

Banco de dados relacional N -N com filmes com protagonismo negro e seus diretores

## COMO RODAR A APLICAÇÃO

Esta aplicação contém um banco de dados Postgres com Docker. Siga o passo a passo para o seu funcionamento completo

### Clone e Dependências

Clone o repositório do server (este mesmo) e instale todas as dependências com npm i

### Docker

Caso não tenha, faça o download do Docker Desktop. A seguir, abra o terminal na pasta raiz do projeto e dê o comando `docker-compose up`.
Certifique-se de que o Docker Desktop está rodando antes de dar o comando. O docker irá baixar a imagem do postgres e criar um banco de dados.

### Conectando e criando tabelas

Para se conectar com o banco de dados criado pelo docker, dê os seguintes comandos:

1. `node .\src\sequelize\1_create.js`

Este comando cria as tabelas definidas nos models e sicroniza a aplicação com o banco de dados, porém exclui todas as tabelas já existentes, caso existam. Caso não queira excluir as tabelas existentes, comente a linha
`await models.sequelize.sync({force: true})` e descomente a linha `// await models.sequelize.sync()`

2. `node .\src\sequelize\2_insert.js`

Este comando insere os dados nas tabelas.

### Rodando o server

Dê o comando `npm start` para o servidor ficar disponível para as requisições. 
Caso dê certo, o console exibirá os seguintes logs: 
`============>Api rodando na porta 5000`
<br>
`--->SUCESSO<---`

Caso haja erro, os logs serão exibidos:
`============>Api rodando na porta 5000`
<br>
`------->FALHA: `

Caso apresente falha, o erro pode estar na conexão com o banco de dados. Observe as variáveis de conexão ou o arquivo docker-compose

#### Obs: Você pode iniciar com o comando `npm start` e abrir outro terminal e executar o comando `node .\src\sequelize\2_insert.js`


### Fazendo requisições

Com o projeto em funcionamento, você pode simular requisições GET com postman ou até pelo navegador com a rota `http://localhost:5000`. Este caminho exibirá o seguinte:
`======>Conectado!`

Para exibir o json com os filmes, siga a rota `http://localhost:5000/filmes` e será exibida a lista de filmes criadas com o sequelize.
Para exibir os diretores, siga a rota `http://localhost:5000/diretor`. Para exibir os dados relacionais dos diretores com os filmes, basta adicionar o id do diretor.
Ex: `http://localhost:5000/diretor/1`

## Neste projeto

* Sequelize
* Express
* Postgres
* Nodemon
* Docker compose

## Frontend

Caso queira visualizar esse projeto no client-side, clone o repo do frontend e siga os passos indicados no arquivo README

[Ver repositório do frontend](https://github.com/claudionsc/black-movies.git)
