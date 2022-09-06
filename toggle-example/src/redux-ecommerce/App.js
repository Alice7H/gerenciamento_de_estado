import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import Ecommerce from './container/Ecommerce';
import Reducer from './Reducer';

// In configureStore devTools is true by default 
// In the past, when we use createStore, 
// we configured with window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore({ reducer: Reducer });

const App = () => {
  return (
    <Provider store={store}>
      <Ecommerce />
    </Provider>
  )
}

export default App;