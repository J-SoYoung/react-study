import React from "react";
import { useParams } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { NavTab } from "../components/NavTab";
import { PostList } from "../components/PostList";
import { TodoList } from "../components/TodoList";

export const HomePage = () => {
  const { keyword } = useParams();
  return (
    <div>
      <NavBar />
      <NavTab />
      <div>{keyword === "todos" ? <TodoList /> : <PostList />}</div>
    </div>
  );
};
