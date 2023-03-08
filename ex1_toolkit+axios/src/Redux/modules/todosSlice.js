import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos:[],
  isLoading: true,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3005/todos")
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodos = createAsyncThunk(
  "addTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3005/todos")
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// action 생성하는 부분이 사라지고 아래 부분에서
// 액션value, 액션함수, 리듀서가 합쳐짐
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducer: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('state', current(state))
      console.log('action', action.payload)
      state.todos = [...action.payload]
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__addTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__addTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = [action.payload, ...state.todos ]
    },
    [__addTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteTodos: (state, action) => {
      const copy = state.todos
      const newList = copy.filter((t)=> t.todosId !== action.payload)
      state.todos = [...newList]
    },

    editStartTodos: (state, action) => {
      const edit = state.todos.find(t => +t.todosId === +action.payload)
      edit.isEdit = !edit.isEdit
    },

    editEndTodos: (state, action) => {
      const { title, content } = action.payload.state
      const editTodo = state.todos.find(t=> +t.todosId === +action.payload.id)
      const idx = state.todos.findIndex(t=> +t.todosId === +action.payload.id)

      editTodo.title = (title==="")? state.todos[idx].title : title
      editTodo.content = (content ==="")? state.todos[idx].content : content
      editTodo.isEdit = false 
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { 
  addTodos, 
  getTodos, 
  deleteTodos, 
  editStartTodos, 
  editEndTodos 
} = todosSlice.actions;
export default todosSlice.reducer;