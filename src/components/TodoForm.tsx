import React, { ChangeEvent, useState, FormEvent } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = ({
  addTodo
}) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="Add a Todo"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        Add a todo
      </button>
    </form>
  );
};

export default TodoForm;
