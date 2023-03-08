//  리덕스 툴킷만
// todosSlice.js

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    {
      todosId: 1,
      title: "리덕스 툴킷 적용한 투두..",
      content: "자바스크립트가 이렇게나 어렵다니!",
      isDone: false,
    },
    {
      todosId: 2,
      title: "리액트 AXIOS화이팅 ",
      content: "그 다음은 서버연결이다",
      isDone: false,
    },
    {
      todosId: 3,
      title: "내일이 최종프로젝트다 와",
      content: "벌써 시간이 이렇게, 잘해보자!",
      isDone: true,
    },
  ],
  comment: [
    {
      commentId: 1,
      comment: "some comment",
      todosId: 1,
    },
    {
      commentId: 2,
      comment: "오늘크리스마스임",
      todosId: 1,
    },
    {
      commentId: 3,
      comment: "작은프로젝트 성공하자",
      todosId: 2,
    },
  ],
};

// action 생성하는 부분이 사라지고 아래 부분에서
// 액션value, 액션함수, 리듀서가 합쳐짐
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 서버에 요청하는 게 아니니까 그냥 state 출력
    getTodos: (state, action) => {
      state.todos = [...state.todos];
    },

    addTodos: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },

    deleteTodos: (state, action) => {
      const copy = state.todos;
      const newList = copy.filter((t) => t.todosId !== action.payload);
      state.todos = [...newList];
      // console.log(newList)
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { addTodos, getTodos, deleteTodos } = todosSlice.actions;
export default todosSlice.reducer;
