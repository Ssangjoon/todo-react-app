import './App.css';
import Todo from './Todo';
import { useState } from 'react';
import {Container,List, Paper} from "@mui/material"
import AddTodo from './AddTodo';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItems([...items, item]);
    console.log("items : ", items);
  }

  const editItem = () => {
    setItems([...items]);
  }

  const deleteItem = (item) => {
    const newItems = items.filter(e => e.id !== item.id);
    setItems([...newItems]);
  }

  let todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} editItem={editItem} deleteItem={deleteItem} key={item.id}/>
        ))}
      </List>
    </Paper>
  )

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem}/>
        <div className='TodoList'>{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
