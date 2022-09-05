import { createContext, useState } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(prevState => !prevState);

  return (
    <ToggleContext.Provider value={{
      toggle,
      handleToggle
    }}>
      {props.children}
    </ToggleContext.Provider>
  );
};