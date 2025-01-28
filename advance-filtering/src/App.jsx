import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
      <Category />
    </>
  );
}

export default App;
