import React, {useState} from "react";

import {Button, Grid, TextField} from "@mui/material";

const AddTodo = (props) => {
    // 사용자 입력값 지정
    const [item, setItem] = useState({title:""})
    const addItem = props.addItem;

    const onButtonClick = () => {
        addItem(item);
        setItem({title:""});
    }

    const onInputChange = (e) => {
        setItem({title:e.target.value});
        console.log(item);
    };

    return (
        <Grid container style={{ marginTop: 20 }}>
          <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
            <TextField placeholder="Add Todo here" fullWidth
                onChange={onInputChange} value={item.title}/>
          </Grid>
          <Grid xs={1} md={1} item >
            <Button fullWidth style={{ height: '100%' }} color="secondary" 
                variant="outlined" onClick={onButtonClick}>
              +
            </Button>
          </Grid>
        </Grid>
    );
}

export default AddTodo;