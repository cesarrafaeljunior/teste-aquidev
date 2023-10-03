

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

## Rotas que precisam de autenticação: