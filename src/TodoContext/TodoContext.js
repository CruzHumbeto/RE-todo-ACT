import React, { Children } from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("RE:todo:ACT-v1", []);

  const [serchValue, setSerchValue] = React.useState("");

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const filteredTodo = todos.filter((todo) =>
    todo.texto.toLowerCase().includes(serchValue.toLowerCase())
  );

  const changeCompleted = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((task) => task.texto === text);
    newTodos[todoIndex].completed === true
      ? (newTodos[todoIndex].completed = false)
      : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const copyTodos = [...todos];
    const newTodos = copyTodos.filter((task) => task.texto !== text);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        serchValue,
        setSerchValue,
        filteredTodo,
        changeCompleted,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
