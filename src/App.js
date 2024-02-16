import './App.css';
import Todo from './Todo';
import { useState } from 'react';
import {Container,List, Paper} from "@mui/material"
import AddTodo from './AddTodo';

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

  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} key={item.id}/>
        ))}
      </List>
    </Paper>
  )

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
