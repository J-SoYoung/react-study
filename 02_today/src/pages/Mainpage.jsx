import React from "react";
import { useNavigate } from "react-router-dom";
import { saveItem } from "../service/storage";

export const Mainpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Mainpage</h1>
      <h3
        onClick={() => {
          navigate("/todos");
          saveItem("tabKeyword", "todos");
        }}
      >
        들어가기
      </h3>
    </div>
  );
};
