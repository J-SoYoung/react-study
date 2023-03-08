// todosSlice.js
// redux-toolkit은 상태불변을 위해 immer가 자동으로 적용된다. 
// current는 immer의 함수로서 state의 업데이트 되지 않은 상태를 확인해 볼 수 있다. 
import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
  comments : [
    {
      commentId: 1,
      comment: 'some comment',
      todosId: 1,
      user : {
        username : 'thdud11'
      }
    },
    {
      commentId: 2,
      comment: '오늘크리스마스임',
      todosId: 1,
      user : {
        username : 'thdud11'
      }
    },
    {
      commentId: 3,
      comment: '작은프로젝트 성공하자',
      todosId: 2,
      user : {
        username : 'thdud11'
      }
    },
  ]
};


// action 생성하는 부분이 사라지고 아래 부분에서
// 액션value, 액션함수, 리듀서가 합쳐짐
const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    // 서버에 요청하는 게 아니니까 그냥 state 출력 
    getComment: (state, action) => {
      console.log('state', state.comments)
      state.comments = [...state.comments]
    },

    addComment: (state, action) => {
      console.log('state', current(state))
      console.log('action', action.payload)
      state.comments = [action.payload, ...state.comments]
    },

    delComment: (state, action) => {
      console.log('state', state.comments)
      console.log('action', action.payload)
      
      const copy = state.comments
      const newList = copy.filter((c)=> +c.commentId !== +action.payload)
      state.comments = [...newList]
    },
    
    delComment: (state, action) => {
      console.log('state', state.comments)
      console.log('action', action.payload)
      
      const copy = state.comments
      const newList = copy.filter((c)=> +c.commentId !== +action.payload)
      state.comments = [...newList]
    },

  },
});


// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { addComment, getComment, delComment, editComment } = commentSlice.actions;
export default commentSlice.reducer;