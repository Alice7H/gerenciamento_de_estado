import { Provider } from 'react-redux';
import Connector from './redux/connect';
import { store } from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Connector />
    </Provider>
  )
}

