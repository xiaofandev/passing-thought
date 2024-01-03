import React,{useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

  const [text, setText] = useState('');

  const handleChange = ({target}) => { 
    setText(target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = event.value;
    if (text) {
      const newThought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime()
      }
      props.addThought(newThought);
      setText('');
    }
    
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleChange}
        value={text}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
