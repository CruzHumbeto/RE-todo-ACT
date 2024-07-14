import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "./UseLocalStorage";

// const defaultTodos = [
//   { texto: "Cortar cebollas 🧅", completed: false },
//   { texto: "Comprar 1/4 lb de 🧀", completed: true },
//   { texto: "Comprar mogollas para 🍔", completed: true },
//   { texto: "comprar un 🥖", completed: true },
//   { texto: "Terminar el curso de introduccion a react", completed: false },
//   { texto: "Terminar los cursos de python", completed: false },
//   { texto: "Aprender como ser un pro en todo lo que hago", completed: false },
// ];
// localStorage.setItem("RE:todo:ACT-v1", JSON.stringify(defaultTodos));

function App() {
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
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      serchValue={serchValue}
      setSerchValue={setSerchValue}
      filteredTodo={filteredTodo}
      changeCompleted={changeCompleted}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
