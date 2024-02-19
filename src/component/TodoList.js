import { Paper, List } from "@mui/material";
import Todo from './Todo';

function TodoList({ items, editItem, deleteItem }) {
  return (
    <Paper style={{margin:16}}>
      <List>
        {items.map((item) => (
          <Todo item={item} editItem={editItem} deleteItem={deleteItem} key={item.id} />
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
