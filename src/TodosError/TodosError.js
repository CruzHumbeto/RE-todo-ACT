import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import "./TodosError.css";

function TodosError() {
  return (
    <li className="todoItemList errorTodoItemList">
      <span className="todoItemList-check">
        {<BiSolidErrorAlt className="ErrorIcon" />}
      </span>
      <p className="todoItemList-text errorText">
        Oops! something went wrong 😓🙊
      </p>
    </li>
  );
}

export { TodosError };
