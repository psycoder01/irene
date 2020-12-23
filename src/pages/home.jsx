import React, { useState, useRef,useEffect } from "react";
import { TextField, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Todos from "../components/todos";
import SnackBar from '../components/snackbar'

export default function Home() {
  const todoRef = useRef();
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);

  const addTodo = (event) => {
      event.preventDefault();
    setTodos([
      ...todos,
      {
        task: todoRef.current.value,
        completed: false,
        createdAt: new Date().toLocaleTimeString(),
      },
    ]);
    setTotal(total + 1);
    todoRef.current.value = "";
    setMessage("Todo is added Dumbhead")
    setOpen(true);
  };

  const delTodo = (delIndex) => {
    setTodos(todos.filter((todo, index) => delIndex !== index));
    if (todos[delIndex].completed) {
      setCompleted(completed - 1);
    }
    setTotal(total - 1);
    setMessage('Todo is deleted Dumbhead')
    setOpen(true);
  };

  const markDone = (markIndex) => {
    setTodos(
      todos.map((todo, index) => {
        if (index === markIndex) {
          todo.completed = true;
          todo.completedAt = new Date().toLocaleTimeString();
        }
        return todo;
      })
    );
    setCompleted(completed + 1);
  };

  const [open, setOpen] = useState(false);
  const [message,setMessage] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(()=>{
      todoRef.current.focus();
  },[]);

  return (
    <div style={{ textAlign: "center", margin: "2em" }}>
      <h5 style={{ margin: "2em" }}>
        Hi I'm Irene and I will be your assitant for the day
      </h5>
      <h3>Total : {total}</h3>
      <h3>Completed : {completed}</h3>
      <div>
        {todos.map((todo, index) => (
          <Todos
            key={index}
            index={index}
            task={todo.task}
            createdAt={todo.createdAt}
            delTodo={delTodo}
            markDone={markDone}
            completed={todo.completed}
            completedAt={todo.completedAt}
          />
        ))}
      </div>
      <form>
          <TextField type="text" label="Add Todo" inputRef={todoRef} />
      <IconButton type="submit" onClick={addTodo}>
        <AddIcon />
      </IconButton>
      </form>
      

      <SnackBar open={open} handleClose={handleClose} message={message}/>
    </div>
  );
}
