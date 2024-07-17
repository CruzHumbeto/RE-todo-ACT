import "./TodoItem.css";
import { GoCheckCircle } from "react-icons/go";
import { GoCheckCircleFill } from "react-icons/go";
import { ReactComponent as DeleteSVG } from "../Icons/delete.svg";

function TodoItem(props) {
  const validate = props.completed ? (
    <GoCheckCircleFill className="completedCircularCheck" />
  ) : (
    <GoCheckCircle className="toCompleteCircularCheck" />
  );
  return (
    <li className="todoItemList" draggable="true">
      <span className="todoItemList-check" onClick={props.onComplete}>
        {validate}
      </span>
      <p
        className={`todoItemList-text ${
          props.completed ? "todoItemList-text--completed" : ""
        }`}
      >
        {props.text}
      </p>
      <span className="todoItemList-spanClose">
        <DeleteSVG className="todoItemList-close" onClick={props.onDelete} />
      </span>{" "}
      {/* <span className="todoItemList-close" onClick={props.onDelete}>
        ❌
      </span> */}
    </li>
  );
}

export { TodoItem };
