import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ReduxStudy } from "./moveComp/ReduxStudy";
import styled from "styled-components";

export const TodoList = () => {
  const navigate = useNavigate();
  return (
    <>
      <HomeworkBox>
        <button
          onClick={() => {
            navigate("/redux");
          }}
        >
          reduxTooklit 연습
        </button>

        <button
          onClick={() => {
            navigate("/carousel");
          }}
        >
          Carousel 구현
        </button>
      </HomeworkBox>
    </>
  );
};
const HomeworkBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & > button {
    height: 45px;
    margin-bottom: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
  }
  button:hover {
    background-color: #e6e6e6;
  }
`;
