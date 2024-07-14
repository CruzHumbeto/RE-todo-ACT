import React from "react";
import { GoCheckCircle } from "react-icons/go";
import { ReactComponent as DeleteSVG } from "../Icons/delete.svg";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <li className="todoItemList skeletonTodoItemList">
      <span className="todoItemList-check">
        {<GoCheckCircle className=" skeletonCheckIcon" />}
      </span>
      <div className="todoItemList-text">
        <div className="skeletonText"></div>
        <div className="skeletonText"></div>
      </div>
      <DeleteSVG className=" skeletonCloseIcon" />
    </li>
  );
}

export { TodosLoading };
