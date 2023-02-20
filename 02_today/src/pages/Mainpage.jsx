import React from "react";
import { useNavigate } from "react-router-dom";
import styled, {css , ThemeProvider }from "styled-components";
import { animation } from 'polished';

import Button from "../components/Button";
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
      <div>
        <ThemeProvider
          theme={{
            palette: {
              blue: "#228be6",
              gray: "#495057",
              pink: "#f06595",
            },
          }}
        >
          <Circle color="green" huge />
          <Button>button</Button>
          <Button color = 'gray'>button</Button>
          <Button color = 'pink'>button</Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

const Circle = styled.div`
  width: 100px;
  height: 100px;  
  background-color: ${props => props.color || 'black'};
  ${props => props.huge && css`
      width: 10rem;
      height: 10rem;
    `}

  &:hover {
    cursor: pointer;
    ${animation('rotate', '1s', 'ease-in-out')};
  }
`;