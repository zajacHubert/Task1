import React, { useEffect, useState } from 'react'
import './App.css';

export const App = () => {

  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    })()
  }, [])

  const changeHandler = text => {
    if (!text) {
      setText('');
      setSuggestions([]);
      return;
    }

    setText(text);
  }

  const suggestHandler = text => {
    setText(text);
    setSuggestions([]);
  }

  console.log(users);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="name"
        onChange={e => changeHandler(e.target.value)}
        value={text}

      />

      {suggestions &&
        suggestions.map((el, i) => (
          <div
            key={i}
            className="items"
            onClick={() => suggestHandler(el.name)}
          >
            {el.name}
          </div>
        ))
      }
    </div>
  );
}


