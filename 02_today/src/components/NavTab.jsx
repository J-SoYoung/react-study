import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loadItem, saveItem } from "../service/storage";
import { MainTabBox, Tab } from "../style/NavStyle";

export const NavTab = () => {
  const navigate = useNavigate();
  const isSelect = loadItem("tabKeyword");

  return (
    <MainTabBox>
      <Tab
        onClick={() => {
          navigate("/todos");
          saveItem("tabKeyword", "todos");
        }}
        selectButton={isSelect === "todos" ? true : false}
      >
        Todo
      </Tab>
      <Tab
        onClick={() => {
          navigate("/posts");
          saveItem("tabKeyword", "posts");
        }}
        selectButton={isSelect === "posts" ? true : false}
      >
        Post
      </Tab>
    </MainTabBox>
  );
};
