import Ecommerce from './container/Ecommerce';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import Reducer from './Reducer';
import Saga from './Saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: false,
    serializableCheck: false
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(Saga);

const App = () => {
  return (
    <Provider store={store}>
      <Ecommerce />
    </Provider>
  )
}

export default App;