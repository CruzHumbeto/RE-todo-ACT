import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    submitTodo();
  };

  const submitTodo = () => {
    if (newTodoValue.trim() !== "") {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitTodo();
    }
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new task</label>
      <textarea
        placeholder="Live life to the fullest"
        value={newTodoValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--create"
          disabled={newTodoValue.trim() === ""}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
