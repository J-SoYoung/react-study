import { createSlice, current } from "@reduxjs/toolkit";
import { saveItem } from "../../service/storage";

const initialState = {
  homeKeyword: "todo",
};

// 액션value, 액션함수, 리듀서가 합쳐짐
// 모듈의 이름, 초기상태값  들어감
// 리듀서 안의 이름이 액션 함수 이름과 같다
const keywordSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    homeKeyword: (state, action) => {
      // console.log("state", current(state));
      // console.log("action", action);
      saveItem("homeKeyword", action.payload);
      state.homeKeyword = action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { homeKeyword } = keywordSlice.actions;
export default keywordSlice.reducer;
