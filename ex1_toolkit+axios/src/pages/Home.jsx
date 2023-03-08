import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Comment from "../components/HomeComment";
import FormInput from "../components/FormInput";
import TodoCard from "../components/TodoCard";
import { addTodos, getTodos, __getTodos } from "../Redux/modules/todosSlice";
import "./Home.css";
// import TodoCardEdit from "../components/TodoCardEdit";
// 리덕스 구현 안한 투두 후후후

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      <div className="App">
        <FormInput />
        <div className="contain">
          <div className="todo_list_box list_box">
            <>
              <h1 className="list_title">오늘의 할 일</h1>
              <TodoCard />
            </>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
