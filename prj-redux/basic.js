// Em um projeto, criamos um arquivo
// Inicializamos ele com o `npm init` para instalar os pacotes necessários para  a
// aplicação funcionar. 
//E instalamos a o redux com o comando `npm install redux`
const createStore = redux.createStore

// A propriedade type indica o tipo de ação a ser feita
// A propriedade type é definido como uma constante de string
const BUY_CAKE = 'BUY_CAKE'

// Action leva as informações da app para o redux store.
// action creator é uma função que retorna uma ação.
function buyCake() {
  // action é um objeto com uma propriedade type
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

// Reducer especifica como o estado da aplicação muda em resposta
// às ações enviadas ao store
// Funções aceitam estado e ações como argumentos e retornam o próximo estado
// da aplicação
// (previousState, action) => newState

const initialState = {
  numOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

// Redux store (state) mantém o estado da aplicação
const store = createStore(reducer)

// permite o acesso ao state via o método getState()
console.log('Initial state', store.getState())

// permite a atualização do estado via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// registra ouvintes via subscribe(listener)
// lida com o cancelamento do registro de ouvintes 
// por meio de funções retornadas pelo subscribe(listener)
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
