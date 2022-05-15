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

    const matches = users.filter(user => {
      const tokenizedName = user.name.split(' ');
      return tokenizedName.some((namePart) =>
        namePart.toLowerCase().startsWith(text.toLowerCase()));
    });

    setText(text);
    setSuggestions(matches);
  }

  const suggestHandler = text => {
    setText(text);
    setSuggestions([]);
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="name"
        onChange={e => changeHandler(e.target.value)}
        value={text}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}

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


