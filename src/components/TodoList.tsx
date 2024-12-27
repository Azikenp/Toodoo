import React from "react";
import TodolistItem from "./TodolistItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodolistItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
