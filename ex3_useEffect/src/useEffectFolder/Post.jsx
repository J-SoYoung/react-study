import React, { useEffect, useState } from "react";

export const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        alert("posts are ready, updating state");
        setPosts(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {posts?.map((p) => {
        return (
          <div key={p.id} style={{ border: "1px solid black" }}>
            <p>{p.title}</p>
          </div>
        );
      })}
    </div>
  );
};
