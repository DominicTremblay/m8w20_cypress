import React, { useState } from 'react';
import './App.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Collect a Power Star', completed: false },
    { id: 2, task: 'Rescue Princess Peach', completed: false },
    { id: 3, task: 'Find a secret warp pipe', completed: false },
    { id: 4, task: 'Break a Brick Block', completed: false },
  ]);

  const addNewTodo = (content) => {
    // add a new todo

    const newTodo = {
      // id: todos.length + 1,
      task: content,
      completed: false,
    };

    setTodos((prev) => [...todos, newTodo]);

    axios({
      method: 'POST',
      url: '/api/todos',
      data: newTodo,
    })
      .then((result) => {
        // add the new todo to the state
        setTodos((prev) => [...todos, result.data]);
        console.log(result.data);
      })
      .catch((err) => console.log(err.message));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    axios({
      method: 'DELETE',
      url: `/api/todos/${id}`,
    })
      .then((result) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      })
      .catch((err) => console.log(err.message));
  };

  const checkTodo = (id) => {
    //need to toggle the completed of the todo with that id
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="App container">
      <h1 data-test="app-title">Mario's Todos</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default App;
