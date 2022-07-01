import { useState } from 'react';
import { MessageReduxProps } from '../redux/connect';

export default function DisplayMessages({messages, submitNewMessage}: MessageReduxProps) {
  const [input, setInput] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function submitMessage(event: React.SyntheticEvent) {
    event.preventDefault();
    submitNewMessage(input);
    setInput('');
  }

  return (
    <div>
      <h2>Type in a new message:</h2>
      <input type="text" value={input} onChange={handleChange}/>
      <button type="submit" onClick={submitMessage}>Submit</button>
      <ul>
        {
          messages.length > 0 && messages.map((message: string) => <li key={message}>{message}</li>)
        }
      </ul>
    </div>
  )
}
