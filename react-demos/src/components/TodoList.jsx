import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [value,setValue] = useState("");

  let addValue = () => {
      event.preventDefault();
      setTodo([...todo, value]);
      console.log(todo)
      event.target.reset();
  }

  return (
    <div>
      <input onChange={(e)=> setValue(e.target.value)} type="text" value={value} placeholder="Enter your todo" />
      <button onClick={addValue} >Add</button>
        <ul>
            {todo.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  );
};

export default TodoList;