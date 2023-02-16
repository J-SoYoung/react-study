import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";

import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import { getTodosData } from "../service/api";

export const TodoList = () => {
  return (
    <>
      <h1>TODOS</h1>
    </>
  );
};
const TodosBox = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange}; ;
`;
