import { TdTitleCounter } from "../TdTitleCounter/TdTitleCounter";
import { TdFilter } from "../TdFilter/TdFilter";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { AddNewTodo } from "../AddNewTodo/AddNewTodo";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import "./App.css";

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  serchValue,
  setSerchValue,
  filteredTodo,
  changeCompleted,
  deleteTodo,
}) {
  return (
    <>
      <h1>RE : TODO : ACT</h1>
      <TdTitleCounter
        tdCompleted={completedTodos}
        tdToComplete={totalTodos}
        tdLoading={loading}
      />
      <TdFilter serchValue={serchValue} setSerchValue={setSerchValue} />
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

      <AddNewTodo />
    </>
  );
}

export { AppUI };
