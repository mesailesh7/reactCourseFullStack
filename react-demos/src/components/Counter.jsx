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
    </div>
  );
};

export default Counter;
