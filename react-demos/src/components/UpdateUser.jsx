import React, { useState } from "react";
import { Data } from "./UserProvider";
import { DiVim } from "react-icons/di";

const UpdateUser = () => {
  const [name, setName] = Data;
  const [name2, setName2] = useState("");

  const handleClick = () => {
    setName(name2);
  };
  return (
    <div>
      <input
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default UpdateUser;
