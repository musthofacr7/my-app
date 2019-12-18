import React from "react";

function Counter() {
  const [number, setNumber] = React.useState(0);
  const naik = function() {
    setNumber(number + 1);
  };
  const turun = function() {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={naik}>naik</button>
      <button onClick={turun}>turun</button>
    </div>
  );
}
export default Counter;
