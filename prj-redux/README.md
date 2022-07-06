# Redux

Redux é uma biblioteca para armazenamento de estado, criado por Dan Abramov.

Ele veio para simplificar o controle dos estados de uma aplicação.

Esses estados ficarão armazenados em uma árvore de objetos através do store.

## Store

É como um container, responsável por receber e entregar as requisições dos componentes.

A função que cria o store é chamado de createStore;

Ela é imutável e guarda os estados da aplicação que lhe foi atribuída.

## Actions

A ação é um objeto com a propriedade `type`.

E, é responsável por indicar que tipo de ação a ser feita, ou seja, precisamos das ações para acionar uma mudança de estado no store.

A função responsável por retornar a ação é chamada de action creator e ele pode ser chamado sem argumentos ou com um payload a ser anexado à ação.

Neste contexto o payload ou "carga útil" refere-se à transmissão de dados ou informações úteis.

## Reducers

O Reducer é uma função que recebe um estado e uma ação por parâmetro e retornam o próximo estado da aplicação, usando o switch/case para isso.

O Reducer especifica como o estado da aplicação muda em respostas às ações enviadas ao store.

Lembre-se do conceito de imutabilidade,
o estado não é modificado,mas um novo estado é retornado sobrescrevendo o estado atual da aplicação.

## Dispatch

É a única maneira de acionar uma mudança de estado.

O Dispatch('despacho' em inglês) é um método do Redux que recebe por parâmetro uma ação e a envia para o `reducer`.

## Subscribe

Subscribe('inscrição' em português), é uma funcionalidade responsável por adicionar um ouvinte de alteração.

Quando uma ação for despachada e alguma árvore de estado for alterada, o subscribe é chamado.

Você pode então chamar o método getState para ler a árvore de estado atual dentro do retorno de chamada.

## Unsubscribe

A inscrição retorna uma função que cancela a assinatura do ouvinte de alteração, chamamos ele de unsubscribe.

## Provider

Provider é um componente que disponibiliza ao Redux compartilhar o store para quaisquer componentes aninhados.

## CombineReducers

É uma função auxiliar que transforma um objeto composto de funções reducers diferentes em uma único para a qual você pode passar ao createStore.

Em resumo, serve para criar um único redutor de raiz entre muitos.

## Connect

É uma função que conecta um componente Redux store com um componente React.

Ele fornece as partes dos dados de que precisa da store e as funções que pode usar para despachar `actions`.

Essa função conectora pode receber 4 parâmetros opcionais: mapStateToProps, mapDispatchToProps, mergeProps, options.

O mapStateToProps lida com o `state` e o mapDispatchToProps com o `dispatch`.

Caso o mapStateToProps e o mapDispatchToProps forem definidos como o primeiro e segundo argumentos, eles serão fornecidos ao mergeProps para dar lugar ao terceiro argumento; ownProps.

Toda atualização do store, chama o mapStateToProps.

Se não quiser se inscrever nas atualizações, passe `null` ou `undefined` ao invés de definir o mapStateToProps.

## Hooks

Os hooks API são uma alternativa ao `connect`, eles permitem que você assine o Redux store e despache ações sem envolver seus componentes em arquivos connect.

Por serem mais simplificados, trabalham melhor com typescript.

Assim como o connect, primeiro, deve-se envolver a aplicação em um componente Provider para tornar a store disponível em toda a árvore de componentes.

A partir daí, usamos os ganchos:

### useSelector

O useSelector permite que você extraia dados do estado usando uma função seletora.

Equivale ao mapStateToProps.

Ela se inscreverá nas mudanças na Redux store e executará seu seletor sempre que uma `action` for despachada.

O seletor pode retornar qualquer valor, não apenas um objeto.

Quando uma ação é despachada, o hook fará a comparação do resultado do valor prévio com o atual e se forem diferentes, o componente será forçado a re-renderizar.

A função seletora não recebe um argumento ownProps, mas os props podem ser usados ​​por meio de closure ou usando um selector de curry.

Carregamento extra pode ocorrer, quando usamos
seletores memoizados.

Para cada chamada ao useSelector, cria-se uma inscrição individual ao store.

### useDispatch

É um hook que retorna uma referência à função dispatch da Redux store.

Serve para despachar `actions`.
