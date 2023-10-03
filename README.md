<h1 align="center"> Beers </h1>

<hr>

### Tópicos

- [Instalação do Back-End](#instalação-do-back-end)
- [Instalação do Front-End](#instalação-do-front-end) 
- [Api Externa Utilizada no Front](#api-utilizada)
- [Doc da API](#doc-da-api)

<hr>

## Instalação do Back End

- [Utilizando Docker](#utilizando-o-docker)
- [Sem o Docker](#sem-o-docker)

<hr>

# Utilizando o docker

OBS: Você precisa ter o docker instalado e rodando na sua máquina!

## Passo 1:

- Faça o clone do seguinte repositório:
  ``` bash
  git clone git@github.com:cesarrafaeljunior/teste-aquidev.git
  ```
- Abra a pasta do diretório em um terminal, navegue até a pasta ```back``` utilizando o comando ```cd back``` e rode o seguinte comando para instalar as dependências:
  ```bash
  npm i
  ```
  ou
  
  ```bash
  yarn install
  ```

  OBS: Importante! Garanta que o comando seja rodado na pasta back, para evitar que o projeto instale as dependências na pasta raiz, caso aconteça, basta excluir a pasta ```node_modules``` gerada na raiz do projeto.
  
## Passo 2:

- Antes de rodar o projeto é necessário fazer algumas configurações de variáveis de ambiente e conexão, para isso crie na raiz da pasta ```back``` um arquivo chamado ```.env```, depois basta copiar todo o conteúdo do arquivo ```.env.example``` para dentro do arquivo ```.env```. 

- Configure agora cada variável de ambiente para a conexão:
    ``` javaScript
        DATABASE_URL="postgresql://pguser:pgpassword@postgres:pgport/pgdatabase?schema=public" //Responsável por conectar o prisma no banco de dados

        POSTGRES_USER= //Nome do usuário que será criado para o postgres no docker
        POSTGRES_PASSWORD= //Password que será criado para o postgres no docker
        POSTGRES_DB= //Banco de dados que será criado no postgres do docker
        PGPORT= //Porta do postgres que será espelhada para o localhost - RECOMENDADA = "5433" para evitar conflitos se o postgres estiver instalado na máquina
        
        PORT= //Porta na qual a aplicação será executada - RECOMENDADA "3001" pois por padrão o next rodará o front-end na porta 3000
        
        SECRET_KEY= //Chave secreta para a geração do token de autenticação
    ```
    OBS1: O banco de dados estará rodando no serviço do docker, por isso ao invés de ```localhost``` utilizaremos o ```postgres```.
    OBS2: As configurações adicionadas nas variáveis de ambiente do postgres, devem ser as mesmas do DATABASE_URL.

## Passo 3:

- Rode o comando ```docker compose up --build``` para buildar a imagem do projeto e criar os serviços necessários para rodar o projeto.

  OBS: A flag ```--build```só é necessária na primeira execução, após ter a imagem buildada, é possivel subir os containeres apenas com o comando ```docker compose up```.

- A seguinte mensagem significa que tudo ocorreu bem e o projeto está rodando:
  ```bash
      api_node  | > back@1.0.0 dev
      api_node  | > tsnd --transpile-only --respawn src/server.ts
      api_node  | 
      api_node  | [INFO] 00:25:26 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.1, typescript ver. 5.2.2)
      api_node  | Server started on port 3001 //Ou a porta que em que escolheu executar
  ```
- Utilize o <a href="https://insomnia.rest/">Imsonia</a> ou qualquer outro software de chamadas HTTP para testar as rotas da API.
- Confira a documentação da api no arquivo "API.README.MD".
 
<hr>

# Sem o docker

## Passo 1:

- Faça o clone do seguinte repositório:
  ``` bash
  git clone git@github.com:cesarrafaeljunior/teste-aquidev.git
  ```
- Abra a pasta do diretório em um terminal, navegue até a pasta back utilizando o comando ```cd back``` e rode o seguinte comando para instalar as dependências:
  ```bash
  npm i
  ```
  ou
  
  ```bash
  yarn install
  ```

  OBS: Importante! Garanta que o comando seja rodado na pasta back, para evitar que o projeto instale as dependencias na pasta raiz, caso aconteça, basta excluir a pasta ```node_modules``` gerada na raiz do projeto
  
## Passo 2:
  - Você precisará criar um banco de dados postgres na sua máquina, além de configurar um usuário => você pode encontrar como fazer isso aqui <a href="https://rpg.consudata.com.br/posts/2021-03-30-papeis-e-usurios-no-postgresql/">Configurar usuário postgres</a>

## Passo 3:

- Antes de rodar o projeto é necessário fazer algumas configurações de variáveis de ambiente e conexão, para isso crie na raiz da pasta ```bacck``` um arquivo chamado ```.env```, depois basta copiar todo o conteúdo do arquivo ```.env.example``` para dentro do arquivo ```.env```.

- Configure agora cada variável de ambiente para a conexão:
    ``` javaScript
        DATABASE_URL="postgresql://pguser:pgpassword@localhost:pgport/pgdatabase?schema=public" //Responsável por conectar o prisma no banco de dados

        POSTGRES_USER= //Nome do usuário do seu postgres
        POSTGRES_PASSWORD= //Password do seu postgres
        POSTGRES_DB= //Banco de dados criado no postgres
        PGPORT= //Porta em que o postgres está rodando - RECOMENDADA = "5432" porta padrão do postgres instalado na máquina
        
        PORT= //Porta na qual a aplicação será executada - RECOMENDADA "3001" pois por padrão o next rodará o front-end na porta 3000
        
        SECRET_KEY= //Chave secreta para a geração do token de autenticação
    ```
    OBS1: O banco de dados estará rodando no localhost, por isso ao invés de postgres utilizaremos o localhost.
    OBS2: As configurações adicionadas nas variáveis de ambiente do postgres, devem ser as mesmas do DATABASE_URL.

  - Rode o comando ```npx prisma migrate dev --name init``` para persistir as models do ORM no banco de dados.
  - Rode o comando ```npm run dev``` para rodar a aplicação.
 
  - A seguinte mensagem significa que tudo ocorreu bem e o projeto está rodando:
  ```bash
      Server started on port 3001 //Ou a porta que em que escolheu executar
  ```
- Utilize o <a href="https://insomnia.rest/">Imsonia</a> ou qualquer outro software de chamadas HTTP para testar as rotas da API.

<hr>

## Instalação do Front End

## Passo 1:

- Faça o clone do seguinte repositório:
  ``` bash
  git clone git@github.com:cesarrafaeljunior/teste-aquidev.git
  ```
- Abra a pasta do diretório em um terminal, navegue até a pasta front utilizando o comando ```cd front``` e rode o seguinte comando para instalar as dependências:
  ```bash
  npm i
  ```
  ou
  
  ```bash
  yarn install
  ```

  OBS: Importante! Garanta que o comando seja rodado na pasta front, para evitar que o projeto instale as dependencias na pasta raiz, caso aconteça, basta excluir a pasta ```node_modules``` gerada na raiz do projeto.

## Passo 2:

- Antes de rodar o projeto é necessário configurar uma variável de ambiente que será responsável pela porta em que a api do back end está rodando, para começar crie um arquivo na raiz da pasta front chamado ```.env```, depois basta copiar todo o conteúdo do arquivo ```.env.example``` para dentro do arquivo ```.env```.

- Configure agora cada variável de ambiente para a conexão:
    ``` javaScript
        PORTAPI= //Escolha a porta em que a api do back end está rodando
    ```
    OBS: Por padrão o front end está configurado para fazer requisições para a api que está alocada na porta ```3001```, portanto, se escolheu uma porta diferente para rodar a api, é necessário colocar a mesma nesta variável de ambiente.

## Passo 3:

  - Rode o comando ```npm run dev``` para rodar a aplicação.
  - Acesse seu navegador e utilize o seguinte link
    <a href="http://localhost:3000">http://localhost:3000</a>

### Api utilizada
<a href="https://punkapi.com/documentation/v2">Punk Api</a>


# DOC DA API

## Rotas que não precisam de autenticação:

### Usuários

#### Criação de usuário

`POST /user - FORMATO DE REQUISIÇÃO`

<p>Exemplo de requisição</p>

```json

{
	"name": "teste",
	"email":"teste@gmail.com",
	"password": "123456789",
}
```

`POST /client - FORMATO DE RESPOSTA- Status Code - 201`
<P>Exemplo de resposta</p>

```json
{
	"name": "teste",
	"email":"teste@gmail.com",
	"id": 1,
	"createdAt": "2023-03-24T16:22:47.649Z"
}
```

#### Buscar todos os usuários cadastrados

`GET /client - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
[{
	"name": "teste",
	"email":"teste@gmail.com",
	"id": 1,
	"createdAt": "2023-03-24T16:22:47.649Z"
}]
```

#### Login de usuário

`POST /login - FORMATO DE REQUISIÇÃO`

<p>Exemplo de requisição</p>

```json

{
	"email": "teste",
	"password": "12345678"
}
```

`POST /login - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNlc2FyIiwiaWF0IjoxNjc5OTMxNjU2LCJleHAiOjE2ODAwMTgwNTYsInN1YiI6ImE5ZTVkNzdlLTZmYjAtNDMwYS1iZDM0LTlmYjJlOTM5NGJkNSJ9.Wc4YnRRrmoyoKVWCRxC6C58E2qRi_DCqJOPDnf53BZE"
}
```

<hr>

## Rotas que precisam de autenticação:

### Produtos

#### Cadastrar novo produto:

`POST /product - FORMATO DE REQUISIÇÃO`

<p>Exemplo de requisição</p>

```json

{
    "name": "Big-Burguer",
    "description": "O melhor lanche da casa!",
    "price": 22,
    "stock": 23,
    "category":{
        "name": "Lanches"
    }
}
```

`POST /product - FORMATO DE RESPOSTA- Status Code - 201`
<P>Exemplo de resposta</p>

```json
{
	"name": "Big-Burguer",
	"description": "O melhor lanche da casa!",
	"price": 22,
	"stock": 23,
	"category": {
		"id": 1,
		"name": "lanches"
	},
	"id": 1,
	"createdAt": "2023-10-02T23:49:53.319Z",
	"updatedAt": "2023-10-02T23:49:53.319Z"
}
```

### Buscar todos os produtos:

`GET /product - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
[{
	"name": "Big-Burguer",
	"description": "O melhor lanche da casa!",
	"price": 22,
	"stock": 23,
	"category": {
		"id": 1,
		"name": "lanches"
	},
	"id": 1,
	"createdAt": "2023-10-02T23:49:53.319Z",
	"updatedAt": "2023-10-02T23:49:53.319Z"
}]
```

### Buscar um produto pelo id:

`GET /product/1 - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
[{
	"name": "Big-Burguer",
	"description": "O melhor lanche da casa!",
	"price": 22,
	"stock": 23,
	"category": {
		"id": 1,
		"name": "lanches"
	},
	"id": 1,
	"createdAt": "2023-10-02T23:49:53.319Z",
	"updatedAt": "2023-10-02T23:49:53.319Z"
}]
```
#### Editar informações de um produto:

`PATCH /product/id - FORMATO DE REQUISIÇÃO`
<P>Exemplo de requisição</p>

```json
{
	"name":"Big-Burguer editado",
	"category": {
		"name": "lanches"
	}
}
```

`PATCH /product/id - FORMATO DE RESPOSTA- Status Code - 200`
<P>Exemplo de resposta</p>

```json
{
	"name": "Big-Burguer editado",
	"description": "Um hamburguersao muito dahora!",
	"price": 22,
	"stock": 23,
	"category": {
		"id": 9,
		"name": "lanches"
	},
	"id": 18,
	"createdAt": "2023-09-30T16:28:50.900Z",
	"updatedAt": "2023-09-30T16:29:15.124Z"
}
```

#### Deletar um produto:

`DELETE /product/id - FORMATO DE RESPOSTA- Status Code - 204`
```json
no body
```


