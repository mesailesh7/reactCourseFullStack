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

  return (
    <div>
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
