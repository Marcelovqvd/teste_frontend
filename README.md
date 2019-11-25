# Teste Front-end Tradeup

## Desafio

Neste teste, o seu objetivo é montar um sistema simples, onde será necessário fazer um CRUD com autenticação e duas páginas que exibem os dados providos de uma API Rest, fornecida por nós.

### Requisitos

A aplicação consiste em três telas:

- Login - onde será efetuada a autenticação.
- Após o login, mais duas telas para os usuários autenticadas:
  - Listagem de Usuários cadastrados.
  - Ver os detalhes de um usuário específicos.

### Tecnologias utilizadas

As tecnologias utilizadas para este desafio foram as seguintes:

- ReactJs - biblioteca Jasvascript ideal para criar SPA - 'single page aplications' e interfaces para aplicações browser e mobile. Pode ser considerado Framework pelo fato de ter um conjunto de ferramentas que surgiu em torno de seu ecossistema. Permite construir interfaces complexas com pequenos trechos de código, componentizando a aplicação. Também é importante destacar a reutilização de código que o React permite.

  A componentização é importante para organizar o código e isso é uma grande vantagem, pois é possível dividir partes do código em componentes que têm funcionalidades específicas. Assim, uma funcionalidade de um componente ou mesmo a lógica de um componente não vai interferir nas outras funcionalidades de outros componentes.
  Também, é possível manter dentro de um mesmo arquivo Javascript os códigos HTML (JSX - permite criar nossos próprios elementos), CSS e javascript, além das imagens utilizadas.

  Outra característica importante é a de que com React, as regras de negócio da aplicação ficam como responsabilidade do back-end. Desse modo, uma só API pode ser consumida por vários clientes diferentes (web e mobile).

- react-router-dom - Permite o roteamento no front-end da aplicação;

- styled-components - Biblioteca de estilização para ReactJs e React Native. Permite criar componentes estilizados. Seu uso é importante pelo fato de que um código CSS feito para estilizar um componente não é compartilhado com outros, exceto se, intencionalmente, forem criados estilos globais para aplicação.
  Outra característica importante é permitir o encadeamento de estilos como nos pré-processadores de CSS Sass e Less.

- Eslint, Prettier e EditorConfig - Utilizados para padronizar a escrita do código;

- axios - Utilizados para manter uma URL base para requisições à API. Assin, não é preciso escrevendo a URL por extenso para cada requisição.

- yarn - Gerenciador de pacotes. Escolhido por ser considerado mais rápido e seguro que o NPM.

- Toastify - Notificão de erro em login. Escolhido por ser muito fácil de instalar e fazer com que a mensagem flutua na tela com uma estilização muito bonita.
