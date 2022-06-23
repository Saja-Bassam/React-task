import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MyList from './MyList';


function App() {

  const [todos, setTodos] = useState(null);
  const [isLoading , setIsLoading] = useState(true);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
      setTodos(data);
      setIsLoading(false);
    })
  }, []);

  return (
    <div className="App">
      <h1 className="header">TODOS!</h1>
      {isLoading && <div>Loading...</div>}
      {todos && (<MyList list={todos}/>)}
    </div>
  );
}

export default App;
