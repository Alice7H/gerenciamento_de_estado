# Redux

Redux é uma biblioteca para armazenamento de estado, criado por Dan Abramov.

Ele veio para simplificar o controle dos estados de uma aplicação.

Esses estados ficarão armazenados em uma árvore de objetos através do store.

A maneira padrão de escrever a lógica Redux é usando o `redux toolkit`.

## Store

É como um container, responsável por receber e entregar as requisições dos componentes.

A função que cria o store é chamado de createStore;

Ela é imutável e guarda os estados da aplicação que lhe foi atribuída.

## Actions

A ação é um objeto com a propriedade type.

E, é responsável por indicar que tipo de ação a ser feita, ou seja, precisamos das ações para acionar uma mudança de estado no store.

A função responsável por retornar a ação é chamada de action creator.

O create action pode ser chamado sem argumentos ou com um payload a ser anexado à ação.

Neste contexto o payload ou "carga útil" refere-se à transmissão de dados ou informações úteis.

## Reducers

O Reducer é uma função que recebe um estado e uma ação por parâmetro e retornam o próximo estado da aplicação, usando o switch/case para isso.

O Reducer especifica como o estado da aplicação muda em respostas às ações enviadas ao store.

Lembre-se do conceito de imutabilidade,
o estado não é modificado,mas um novo estado é retornado sobrescrevendo o estado atual da aplicação.

## Dispatch

É a única maneira de acionar uma mudança de estado.

O Dispatch('despacho' em inglês) é um método do Redux que recebe por parâmetro uma ação e a envia para o reducer.

## CombineReducers

É uma função auxiliar que transforma um objeto composto de funções reducers diferentes em uma único para a qual você pode passar ao createStore ou para o configureStore.

Em resumo, serve para criar um único redutor de raiz entre muitos.

## Subscribe

Subscribe('inscrição' em português), é uma funcionalidade responsável por adicionar um ouvinte de alteração.

Quando uma ação for despachada e alguma árvore de estado for alterada, o subscribe é chamado.

Você pode então chamar o método getState para ler a árvore de estado atual dentro do retorno de chamada.

## Unsubscribe

A inscrição retorna uma função que cancela a assinatura do ouvinte de alteração, chamamos ele de unsubscribe.

## React-redux

É uma biblioteca que centraliza os estados de aplicação, ele permite que os componente React se comuniquem com a store do Redux, incluindo o uso dos hooks `useSelector`, `useDispatch`

### Provider

Provider é um componente que disponibiliza ao redux compartilhar o store para quaisquer componentes aninhados.

### useSelector

É um hook (gancho) que permite extrair dados do estado de armazenamento do Redux, usando uma função seletora, é equivalente a `mapStateToProps`.

### useDispatch

É um hook que retorna uma referência à função dispatch da store do Redux, usado para despachar ações, semelhante ao `mapDispatchToProps`.

## Para saber mais

- [connect](https://react-redux.js.org/api/connect)

- [mapStateToProps](https://react-redux.js.org/using-react-redux/connect-mapstate)

- [mapDispatchToProps](https://react-redux.js.org/using-react-redux/connect-mapdispatch)

- [hooks](https://react-redux.js.org/api/hooks)
