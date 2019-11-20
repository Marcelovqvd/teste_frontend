# Teste Front-end Tradeup

## Desafio

Neste teste, o seu objetivo é montar um sistema simples, onde será necessário fazer um CRUD com autenticação e duas páginas que exibem os dados providos de uma API Rest, fornecida por nós.



### Pontuação

Será necessário para concluir o teste:

- Apenas código front-end será considerado no projeto (HTML, CSS, JavaScript).
- Frameworks CSS não serão permitidos. Todo código CSS deve ser escrito por você.
- Você pode utilizar pré-processadores CSS à vontade.
- O projeto pode ser escrito em javascript puro ou utilizar frameworks como Vue.js, React ou outro.
- Gerenciadores de pacotes e task runners podem ser usados à vontade.
- O projeto precisa ser responsivo, funcionando tanto em desktop quanto em mobile.


### Requisitos

Sinta-se livre para cumprir os requisitos da forma que julgar melhor, o importante é que seja possível executar todas as ações descritas neles.

Você vai perceber que os requisitos são relativamente vagos, pois queremos ver as suas escolhas e o que julga melhor para completar a tarefa.

A aplicação consiste em três telas:
  - Login - onde será efetuada a autenticação.
  - Após o login, mais duas telas para os usuários autenticadas:
    - Listagem de Usuários cadastrados.
    - Ver os detalhes de um usuário específicos.
    
Não se preocupe com marcas, imagens bonitas, etc. O que será avaliado é a usabilidade, qualidade de código e eficiência.

**Para a tela de login:**
Deve ser necessário fornecer e-mail e senha para efetuar o login.

**Para a listagem de usuários:**
Para cada item do endpoint de usuários, deve ser exibido o nome, email e avatar. Ao clicar em um item, deve-se ir para a página de detalhes do usuário.

**Para detalhe do usuário:**
Devem ser exibidas as mesmas informações da listagem.

### Entregável
- A aplicação deve estar funcionando corretamente, também tratando dos possíveis erros que podem ocorrer.
- Repositório no GitHub com o seu código.
- O README do seu projeto deve conter:
  - Instruções para rodar o projeto, caso necessário.
  - Tecnologias usadas e a razão das escolhas delas.

### Prazo

Você tem 7 dias para a entrega do projeto a partir da data que o desafio foi enviado para você.

## Dados

### Autenticação:

##### Request

POST [/api/login](https://reqres.in/api/login)

```js
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```

##### Response

200

```js
{
    "token": "QpwL5tke4Pnpja7X4"
}
```

### Listagem de usuários:

##### Request

GET [/api/users?page=2](https://reqres.in/api/users?page=2)

##### Response

200

```js
{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ]
}
```

### Listagem de usuários:

##### Request

GET [/api/users/2](https://reqres.in/api/users/2)

##### Response

200

```js
{
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    }
}
```
