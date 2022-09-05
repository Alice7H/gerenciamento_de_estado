import useToggle from '../hooks/useToggle';

const ToggleButton = () => {
  const { handleToggle } = useToggle();
  return (
    <button onClick={handleToggle}>Toggle</button>
  )
}

export default ToggleButton;