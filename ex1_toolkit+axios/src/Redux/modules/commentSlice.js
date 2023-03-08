// todosSlice.js
// redux-toolkit은 상태불변을 위해 immer가 자동으로 적용된다.
// current는 immer의 함수로서 state의 업데이트 되지 않은 상태를 확인해 볼 수 있다.
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: {},
  isLoading: true,
  error: null,
};

export const __getComments = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3005/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// action 생성하는 부분이 사라지고 아래 부분에서
// 액션value, 액션함수, 리듀서가 합쳐짐
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducer: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = [...action.payload];
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    addComment: (state, action) => {
      state.comments = [action.payload, ...state.comments];
    },

    delComment: (state, action) => {
      const copy = state.comments;
      const newList = copy.filter((c) => +c.commentId !== +action.payload);
      state.comments = [...newList];
    },

    editStartComment: (state, action) => {
      const edit = state.comments.find((c) => +c.commentId === +action.payload);
      // edit.isEdit = !edit.isEdit
    },

    editEndComment: (state, action) => {},
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const {
  addComment,
  getComment,
  delComment,
  editStartComment,
  editEndComment,
} = commentSlice.actions;
export default commentSlice.reducer;
