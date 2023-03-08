import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodos } from "../Redux/modules/todosSlice";
import CommentInput from "./CommentInput";
import HomeComment from "./HomeComment";

const TodoCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todos.todos);
  const commentList = useSelector((state) => state.todos.comment);

  // data삭제
  const deleteBtn = (id) => {
    dispatch(deleteTodos(id));
  };

  const doneBtn = (id) => {
    // dispatch(doneUser) 완료
  };

  return (
    <>
      <Cardbox>
        {todoList.map((todos) => {
          return (
            <div className="card" key={todos.todosId}>
              <h3
                onClick={() => {
                  navigate(`detail/${todos.todosId}`);
                }}
                style={{ cursor: "pointer" }}
              >
                {todos.title}
              </h3>
              <p>{todos.content}</p>
              <HomeComment comment={commentList} todosId={todos.todosId} />
              <div className="btn_box">
                <button
                  onClick={() => {
                    deleteBtn(todos.todosId);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    doneBtn(todos.todosId);
                  }}
                >
                  {!todos.isdone ? "완료" : "취소"}
                </button>
              </div>
            </div>
          );
        })}
      </Cardbox>
    </>
  );
};
const Cardbox = styled.div`
  /* flex가로 속성, 정렬 아래 한줄로 끝남. 
  공통이 아닌 부분은 wrap 같이 따로 추가해주면 됨
  display: flex;
  justify-content: flex-start;
  align-items: center; */
  ${({ theme }) => theme.common.flexCenter}
  flex-wrap: wrap;

  /* color는 background든 font든 어디든 적용가능 */
  color: ${({ theme }) => theme.colors.orange1};

  .card {
    width: 350px;
    height: 350px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    border-bottom: 2px solid #ffec99;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .card p {
    height: 100%;
    padding-top: 10px;
  }

  .card .btn_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card button {
    border: none;
    padding: 7px 15px;
    margin-right: 10px;
  }
`;

export default TodoCard;
