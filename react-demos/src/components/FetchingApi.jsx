import React, { useEffect, useState } from "react";

const FetchingApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    };
    getData();
    console.log(data);
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FetchingApi;
