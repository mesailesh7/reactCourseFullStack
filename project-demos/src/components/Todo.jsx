import { useState } from "react";
import "../style.css";

const generateId = () => {
  return Math.floor(Math.random() * 10);
};

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: generateId(),
      });
    });
    setInput("");
  };

  // The parameter 't' is needed because you're working with React's setState updater function pattern. When you call setTodos, React needs to know what to do with the previous state to calculate the new state.

  // The 't' parameter represents the current/previous state of todos at the time the update is being processed. This ensures you're always working with the most up-to-date state value, especially important when multiple state updates might be queued.

  // You could name this parameter anything you want - 'prevState', 'currentTodos', 'state' - the name 't' is just a concise choice. What matters is that this parameter gives you access to the current state value so you can derive the next state from it.

  // This pattern is particularly valuable for maintaining state updates that depend on the previous state, which is exactly what you're doing when filtering out a todo by its ID.

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Please enter your Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
