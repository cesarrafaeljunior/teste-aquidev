<h1 align="center"> Beers </h1>

<hr>

### Tópicos

- [Instalação](#instalação)
- [Ferramentas utilizadas](#ferramentas-utilizadas)
- [Api Utilizada](#api-utilizada)

## Instalação

- [Back-End](#instalação-do-back-end)
- [Front-End](#instalação-do-front-end)

### Instalação do Back End

- [Utilizando Docker](#instalação-do-back-end)
- [Sem o Docker](#instalação-do-front-end)

### Utilizando o docker

- Você precisa ter o docker instalado e rodando na sua máquina!

#### Passo 1:
    
    - Abra o diretório clonado e utilizando um terminal navegue até a pasta back
    - Antes de rodar o projeto é necessário fazer algumas configurações de variáveis de ambiente e conexão, para isso crie na raiz do projeto um arquivo chamado ```.env``` 
    - Rode o comando ```docker compose up --build``` para buildar a imagem do projeto e criar os serviços necessários para rodar o projeto.
    - Utilize o <a href="https://insomnia.rest/">Imsonia</a> ou qualquer outro software de chamadas HTTP para testar as rotas da API.


- Clonar o repositório

  ```
  git clone git@github.com:cesarrafaeljunior/teste-aquidev.git
  ```
