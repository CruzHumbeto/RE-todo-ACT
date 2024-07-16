import React from "react";
import "./TdFilter.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TdFilter() {
  const { serchValue, setSerchValue } = React.useContext(TodoContext);
  return (
    <input
      className="inputTask"
      placeholder="Find your task"
      onChange={(Event) => {
        setSerchValue(Event.target.value);
      }}
    ></input>
  );
}

export { TdFilter };
