import React, { useEffect, useState } from 'react'
import './App.css';

export const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    })()
  }, [])

  console.log(users);

  return (
    <div className="App">
      123
    </div>
  );
}


