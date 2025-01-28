import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";

function App() {
  return (
    <>
      <Nav />
      <Products />
      <Recommended />
      <Category />
    </>
  );
}

export default App;
