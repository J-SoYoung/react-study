import { configureStore } from "@reduxjs/toolkit";
// import posts from "../modules/__posts";
import commentSlice from "../modules/commentSlice";
import todosSlice from "../modules/todosSlice";


const store = configureStore({
  reducer: { 
    todos: todosSlice, 
    comments: commentSlice,
    },
});

export default store;
