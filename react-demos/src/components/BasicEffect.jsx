import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Component mounted or updated");
  }, []);

  return (
    <div>
      <h1>Basic Effect</h1>
      <p>This is a basic effect component.</p>
    </div>
  );
};

export default BasicEffect;
