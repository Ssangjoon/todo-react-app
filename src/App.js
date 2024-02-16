import './App.css';
import Todo from './Todo';
import { useState, useEffect } from 'react';
import {Container,List, Paper} from "@mui/material"
import AddTodo from './AddTodo';
import {call} from "./service/ApiService"

function App() {
  const [items, setItems] = useState([]);

  // 첫 렌더링이 일어났을 때, 그 이후에는 배열 안의 오브젝트 값이 변할 때마다 콜백 함수를 부른다. 
  useEffect(() => {
    call("/todo","GET",null)
    .then(res => setItems(res.data));
  },[])


  const addItem = (item) => {
    call("/todo", "POST", item)
    .then(res => setItems(res.data));
  }

  const editItem = (item) => {
    call("/todo","PUT", item)
    .then(res => setItems(res.data));
  }

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then(res => setItems(res.data));
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
