import React, { useState, useEffect } from "react";

const CounterEffect = () => {
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("This is my First Title");

  useEffect(() => {
    setTitle(`This is the number ${value}`);
    document.title = title;
    console.log(title);
  }, [value]);

  return (
    <div>
      <p>This is the {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
