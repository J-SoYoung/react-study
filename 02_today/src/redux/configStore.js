import { configureStore } from "@reduxjs/toolkit";
import homeKeyword from "./module/keywordSlice";

const store = configureStore({
  reducer: {
    // module 추가
    homeKeyword,
  },
});

// 하고 index에 Provider , store연결해야함
export default store;
