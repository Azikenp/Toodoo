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

  const onDelete = () => {console.log("delete");
  };

  const onEdit = () => {console.log("edit");
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red"
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: 'blue'
    },
  ];

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
      <Dropdown options={dropdownOptions} />
    </li>
  );
};

export default TodolistItem;
