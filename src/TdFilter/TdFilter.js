import "./TdFilter.css";

function TdFilter({ serchValue, setSerchValue }) {
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
