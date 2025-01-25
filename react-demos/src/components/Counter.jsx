import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => setCounter(counter - 1)}>
        Decrease the counter with another way
      </button>
    </div>
  );
};

export default Counter;
