import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  status: "welcome",
  todos: [
    {
      todosId: 1,
      title: "json-server",
      isEdit: false,
    },
  ],
  serverData: [],
};

export const getData = createAsyncThunk("todosSlice/getData", async () => {
  const data = await axios.get("http://localhost:3005/posts");
  return data.data;
});

export const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    counter: (state, action) => {
      state.value = state.value + action.payload;
    },
    getTodo: (state, action) => {
      // console.log(current(state));
      state.todos = [...state.todos];
    },
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos = [...state.todos, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      // console.log("pending", action);
      state.status = "loading";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      // console.log("fulfilled", action);
      state.status = "complete";
      state.serverData = [...action.payload];
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { counter, addTodo, getTodo } = todosSlice.actions;
export default todosSlice.reducer;
