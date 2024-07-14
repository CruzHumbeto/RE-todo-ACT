import { GrAddCircle } from "react-icons/gr";
import "./AddNewTodo.css";

function AddNewTodo() {
  return (
    <button
      className="addButton"
      onClick={(Event) => {
        console.log(Event);
      }}
    >
      <GrAddCircle className="circlePlus" />
    </button>
  );
}

export { AddNewTodo };
