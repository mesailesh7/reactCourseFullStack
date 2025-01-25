import React from "react";
import { createContext, useState } from "react";
import UserContext from "./UserContext";
import UpdateUser from "./UpdateUser";

const Data = createContext();

const UserProvider = () => {
  const [name, setName] = useState("Sunny");

  const updateName = (newname) => {
    setName(newname);
  };
  return (
    <div>
      <Data.Provider value={{ name, updateName }}>
        <UserContext />
        <UpdateUser />
      </Data.Provider>
    </div>
  );
};

export { Data };
export default UserProvider;
