import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="counterDiv">
        <h2 className="countTheValue">Count: {count}</h2>
        <button
          className="btnOne"
          onClick={handlePlus}
          disabled={count == 10 ? true : false}
        >
          +
        </button>
        <button
          className="btnOne"
          onClick={handleMinus}
          disabled={count == 0 ? true : false}
        >
          -
        </button>
        <button className="btnOne" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}
