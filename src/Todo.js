import React, {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material"
import { DeleteOutline } from "@mui/icons-material";

const Todo = (props) => {
    const [item, setItem] = useState(props.item)
    const [readOnly, setReadOnly] = useState(true);
    const deleteItem = props.deleteItem;
    const editItem = props.editItem;

    const turnOffReadOnly = () => {
        setReadOnly(false)
    }

    const turnOnReadOnly = (e) => {
        if(e.key === "Enter" && readOnly === false){
            setReadOnly(true);
            editItem(item);
        }
    }

    const editEventHandler = (e) => {
        setItem({...item, title: e.target.value});
    }

    const deleteEventHandler = () => {
        deleteItem(item);
    }

    const checkEventHandler = (e) => {
        item.done = e.target.checked;
        editItem(item)
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkEventHandler}/>
            <ListItemText>
                <InputBase 
                    inputProps={{"aria-label":"naked", readOnly: readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                        <DeleteOutline/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItemText>
        </ListItem>
    );
};

export default Todo;