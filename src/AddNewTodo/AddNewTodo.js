import { GrAddCircle } from "react-icons/gr";
import "./AddNewTodo.css";

function AddNewTodo({ setOpenModal }) {
  return (
    <button
      className="addButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <GrAddCircle className="circlePlus" />
    </button>
  );
}

export { AddNewTodo };
