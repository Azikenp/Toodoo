import TodoForm from "./components/TodoForm";
import "./App.css";
import { useState } from "react";
import TodolistItem from "./components/TodolistItem";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const toggleComplete: ToggleComplete = selectedItem => {
    const updatedTodos = todos.map((todo) => {
      if(todo === selectedItem){
        return {...todo, complete: !todo.complete}
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodolistItem todo={todos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
