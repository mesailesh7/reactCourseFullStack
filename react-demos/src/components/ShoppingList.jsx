// Step 4: useState with an Array of Objects
// 1. Create a new file called ShoppingList.jsx.
// 2. Inside this file, create a functional component called ShoppingList.
// 3. Use useState to manage an array of objects, where each object represents a shopping item with name and quantity.
// • Initialize the state with an empty array.
// • Create a form to add new items to the list.
// • Display the list of shopping items.

import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([
    { name: "Apples", quantity: 5 },
    { name: "Bananas", quantity: 3 },
    { name: "Milk", quantity: 2 },
  ]);

  const [foodName, setFoodName] = useState();
  const [foodQuantity, setFoodQuantity] = useState(0);

  const handeClick = () => {
    setItems([...items, { name: foodName, quantity: foodQuantity }]);
    setFoodName("");
    setFoodQuantity(0);
  };

  return (
    <div>
      Name:{" "}
      <input
        type="text"
        value={items.name}
        onChange={(e) => setFoodName(e.target.value)}
      />
      Quantity:{" "}
      <input
        type="number"
        value={items.quantity}
        onChange={(e) => setFoodQuantity(e.target.value)}
      />
      <button onClick={handeClick}>Submit</button>
      {items.map((item, index) => (
        <ul key={index}>
          <li>
            {item.name} {item.quantity}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ShoppingList;
