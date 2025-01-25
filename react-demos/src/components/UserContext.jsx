import React, { useContext } from "react";
import { Data } from "./UserProvider";
import UpdateUser from "./UpdateUser";

const UserContext = () => {
  // const name = useContext(Data);
  // console.log("Hello my name is", name);
  return (
    <div>
      <Data.Consumer>
        {(name) => {
          return <h1>Hello my name is {name}</h1>;
        }}
      </Data.Consumer>
      <UpdateUser />
    </div>
  );
};

export default UserContext;
