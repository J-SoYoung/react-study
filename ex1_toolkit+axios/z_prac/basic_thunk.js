import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../api/axios";


const initialState = {
  posts: [],
  isLoading: true,
  error: null,
};

export const baseURL = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3005/posts")
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addPosts = createAsyncThunk(
  "addPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3005/posts",{"name":'thdud'})
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},
  extraReducers: {
    // 포스트 가져오기
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 포스트추가
    [__addPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__addPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload
    },
    [__addPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
