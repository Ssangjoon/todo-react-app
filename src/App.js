import './App.css';
import { useState, useEffect } from 'react';
import { Container } from "@mui/material"
import AddTodo from './AddTodo';
import TodoList from './component/TodoList'; // 분리된 TodoList 컴포넌트
import NavigationBar from './component/NavigationBar'; // 분리된 NavigationBar 컴포넌트
import LoadingPage from './component/LoadingPage'; 
import { call, signout } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    call("/todo","GET",null)
      .then(res => {
        setItems(res.data);
        setLoading(false); // 데이터 로딩 후 로딩 상태 업데이트
      });
  },[]);

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

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          <NavigationBar signout={signout} />
          <Container maxWidth="md">
            <AddTodo addItem={addItem} />
            <TodoList items={items} editItem={editItem} deleteItem={deleteItem} />
          </Container>
        </div>
      )}
    </div>
  );
}

export default App;
