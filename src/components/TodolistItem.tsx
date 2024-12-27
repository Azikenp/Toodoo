import React from "react";
import Dropdown from "./Dropdown";

interface TodolistItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

const TodolistItem: React.FC<TodolistItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li>
      <label className={todo.complete ? "todo-row completed" : "todo-row"}>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {todo.text}
      </label>
      <Dropdown />
    </li>
  );
};

export default TodolistItem;
