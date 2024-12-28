import React from "react";
import TodolistItem from "./TodolistItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  onEditTodo: EditTodo;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  onEditTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodolistItem
            key={todo.text}
            todo={todo}
            toggleComplete={toggleComplete}
            onRemoveTodo={onRemoveTodo}
            editTodo={onEditTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
