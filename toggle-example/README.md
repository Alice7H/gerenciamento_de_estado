# Gerenciamento de Estado

Este é baseado na aula `Desafio prático: Como gerenciar o estado de uma aplicação React`
da Digital Innovation One,
ministrado por Gilherme Scotti em que utilizamos alguns exemplos para ver sobre o gerenciamento de estado em uma aplicação;

## Temas abordados

- Introdução sobre o estado da aplicação.
- Uso de componente de classe.
- Uso de componente funcional.
- Prop drilling
- Context API
- Hooks (useState, useContext) e hook customizado;
- Redux
- Redux-saga

## Create React App

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app).

## `npm start`

Para rodar a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para vê-lo no navegador.

## Redux-saga

É uma biblioteca que visa tornar os efeitos colaterais do aplicado mais fáceis de gerenciar e testar, mais eficientes de executar e melhores no tratamento de falhas.

O redux-saga é um middleware, ou seja, uma 'camada' entre os disparos de ações e as funções da aplicação, age como um mediador capaz de monitorar e gerenciar o processamento de transações, corrigir mensagens e fornecer recursos de autenticação.

Ex: Ao clicar em um botão para fazer a compra de determinado produto, podemos impedir que a aplicação execute a função de fazer compras várias vezes, confirmar o método de pagamento do usuário e verificar se o usuário está apto a comprar o produto.
