import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
      </h2>
    </div>
  );
};

export default Price;
