// when in useEffect i give dependency of data and when i do console.log(data) it keeps running
// This is happening because putting data in the dependency array of useEffect creates an infinite loop. Here's why:
// When data is added as a dependency, the useEffect runs whenever data changes
// Inside useEffect, we're fetching data and calling setData()
// When setData() updates the state, it triggers a re-render
// The re-render causes useEffect to run again because data changed
// This cycle continues indefinitely

import React, { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
    getData();
  }, []); // Empty dependency array

  // Move console.log outside useEffect if you want to see updates
  console.log(data);

  return (
    <div>
      {data.map((item, data) => {
        return (
          <div key={data.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchDataEffect;
