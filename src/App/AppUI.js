import React from "react";
import { TdTitleCounter } from "../TdTitleCounter/TdTitleCounter";
import { TdFilter } from "../TdFilter/TdFilter";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { AddNewTodo } from "../AddNewTodo/AddNewTodo";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm.js";
import { TodoContext } from "../TodoContext/TodoContext";
import "./App.css";

function AppUI() {
  const {
    loading,
    error,
    filteredTodo,
    changeCompleted,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <h1>RE : TODO : ACT</h1>
      <TdTitleCounter />
      <TdFilter />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && filteredTodo.length === 0 && <EmptyTodos />}
        {filteredTodo.map((todo) => (
          <TodoItem
            key={todo.texto}
            text={todo.texto}
            completed={todo.completed}
            onComplete={() => changeCompleted(todo.texto)}
            onDelete={() => deleteTodo(todo.texto)}
          />
        ))}
      </TodoList>

      <AddNewTodo setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
