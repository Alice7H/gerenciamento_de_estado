import Toggle from './components/Toggle';
import { ToggleProvider } from './contextAPI/ContextProvider';

const App = () => {

  return (
    <ToggleProvider>
      <Toggle />
    </ToggleProvider>
  );
};

export default App;
