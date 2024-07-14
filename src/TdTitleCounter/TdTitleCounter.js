import "./TdTitleCounter.css";

function TdTitleCounter({ tdCompleted, tdToComplete, tdLoading }) {
  const NumberSpan = ({ children }) => (
    <span className="tdTitleCounter-number">{children}</span>
  );

  if (tdLoading) {
    return <h2 className="tdTitleCounter-message">Loading TODOs ...</h2>;
  }

  if (tdCompleted === tdToComplete) {
    return (
      <h2 className="tdTitleCounter-message">Congrats, all tasks done! 😎</h2>
    );
  }

  if (tdToComplete === 0) {
    return (
      <h2 className="tdTitleCounter-message">You don't have any TODOs 🤷🏽‍♂️</h2>
    );
  }

  return (
    <h2 className="tdTitleCounter-message">
      Completed <NumberSpan>{tdCompleted}</NumberSpan> of{" "}
      <NumberSpan>{tdToComplete}</NumberSpan> TODOs
    </h2>
  );
}

export { TdTitleCounter };
