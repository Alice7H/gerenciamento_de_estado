import { useContext } from 'react';
import { ToggleContext } from '../contextAPI/ContextProvider';

const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) return null;
  return context;
}
export default useToggle;