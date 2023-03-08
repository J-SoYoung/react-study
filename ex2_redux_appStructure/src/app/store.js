import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import usersReducer from '../features/users/usersSlice'
// import postsReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    // users: usersReducer,
    // posts: postsReducer,
  },
});

// configureStore 
// Redux store는 configureStoreRedux Toolkit의 기능을 사용하여 생성된다. 
// configureStore에 reducer(slice)를 전달해야 한다.
// 다양한 기능으로 구성될 수 있으며 각 기능에는 reducer가 있다. 
// configureStore를 호출하면 객체의 다양한 reducer를 모두 전달할 수 있다.
// features/counter/counterSlice.js counter 로직에 대한 reducer 파일이 있다. 
// counterReducer에서 해당 기능을 가져올 수 있고, store를 만들 때 포함할 수 있다.

// redux-slice
// slice는 하나의 기능에 대한 reducer의 모음이다. 
// configureStore에 여러 slice를 추가할 수 있다.
// state.users, state.posts및 state.comments각각은 Redux 상태의 개별 "슬라이스"다. 
