import './App.css';
import Todo from './Todo';
import { useState } from 'react';

function App() {
  const [items, setItem] = useState([
    {
    id:"0"
    ,title:"ssang se love da"
    ,done:true
  },
  {
    id:"1"
    ,title:"ssang se love da2"
    ,done:true
  }
]);
  let todoItems = items.length > 0 && items.map((item) => <Todo item={item} key={item.id}/>)
  console.table(todoItems)
  return (
    <div className="App">
      {todoItems} 
    </div>
  );
}

export default App;
