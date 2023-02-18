import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getData, counter, addTodo, getTodo } from "../redux/module/todosSlice";

import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import { useInput } from "../hooks/useInput";

export const TodoList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, handleTitle] = useInput();

  const count = useSelector((state) => state.todos.value);
  const status = useSelector((state) => state.todos.status);
  const todolist = useSelector((state) => state.todos.todos);
  const server = useSelector((state) => state.todos.serverData);

  useEffect(() => {
    dispatch(getTodo());
    dispatch(getData());
  }, [dispatch]);

  const handleTodoAdd = () => {
    const newTodo = {
      todosId: Math.floor(Math.random() * 100),
      title: title,
      isEdit: false,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <>
      <h1>TODOS</h1>
      <CounterBox>
        <button
          onClick={() => {
            dispatch(counter(1));
          }}
        >
          reducer동기
        </button>
        <span>
          {count} - status : {status}
        </span>
      </CounterBox>
      <ServerBox>
        <h1>redux-toolkit, thunk사용</h1>
        {server.map((s) => {
          return (
            <div key={s.postsId}>
              <p>{s.title}</p>
              <p>{s.content}</p>
            </div>
          );
        })}
      </ServerBox>
      <TodoBox>
        <h1>redux-toolkit</h1>
        <div>
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="제목을 입력해주세요"
          />
          <button onClick={handleTodoAdd}> 추가 </button>
        </div>
        {todolist.map((t) => {
          return (
            <div
              key={t.todosId}
              onClick={() => {
                navigate(`/detail/${t.todosId}`);
              }}
            >
              <p>
                <b>title</b> : {t.title}
              </p>
            </div>
          );
        })}
      </TodoBox>
    </>
  );
};
const CounterBox = styled.div`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 10px;
  box-sizing: border-box;
  color: white;
  button {
    margin-right: 15px;
  }
  span {
    font-size: 20px;
    font-weight: 600;
  }
`;
const ServerBox = styled.div`
  /* border-bottom: 3px solid ${({ theme }) => theme.colors.orange}; */
  /* border-top: 3px solid ${({ theme }) => theme.colors.orange}; */
  padding-bottom: 20px;
  box-sizing: border-box;
  div {
    border: 1px solid ${({ theme }) => theme.colors.orange};
    padding: 10px;
    box-sizing: border-box;
    p {
      margin: 0;
    }
  }
`;
const TodoBox = styled.div`
  div {
    border-bottom: 1px solid lightgray;
    padding: 15px;
    box-sizing: border-box;
    cursor: pointer;
    p {
      margin: 0;
    }
  }
`;
