import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/DisplayMessages.css';

interface IMessagesProps {
  messages: string[];
}

export default function DisplayMessages() {
  const [input, setInput] = useState<string>('');

  const messages = useSelector((state: IMessagesProps) => state.messages);
  const dispatch = useDispatch();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function submitMessage(event: React.SyntheticEvent) {
    event.preventDefault();
    dispatch({type: 'ADD', message: input})
    setInput('');
  }

  return (
    <div className="container">
      <h2>Type in a new message:</h2>
      <label htmlFor="message">Type in a message</label>
      <input type="text" name="message" id="message" value={input} onChange={handleChange}/>
      <button type="submit" onClick={submitMessage}>Submit</button>
      <ul>
        {
          messages.length > 0 && messages.map((message: string) => <li key={message}>{message}</li>)
        }
      </ul>
    </div>
  )
}
