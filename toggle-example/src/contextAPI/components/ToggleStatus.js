import useToggle from '../../hooks/useToggle';

const ToggleStatus = () => {
  const { toggle } = useToggle();
  return (
    <p>The status is: {toggle ? 'ON' : 'OFF'}</p>
  )
}

export default ToggleStatus;