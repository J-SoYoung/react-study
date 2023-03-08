import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // redux-toolkit을 사용하면 immer라이브러리가 작동되기 때문에 실제 상태를 변경하지 않는다
      // Redux Toolkit의 createReducer API는 내부적으로 자동으로 Immer를 사용합니다.
      // 따라서 createReducer에 전달되는 모든 리듀서 함수 내부에서 상태를 "변경"하는 것이 이미 안전합니다.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})
// 이전 reducer에서는 {type: "counter/increment"} 별로 작성해야 했지만 toolkit은 그렇게 하지 않아도 된다
// Redux Toolkit에는 createSlice액션 유형 문자열, 액션 생성자 함수 및 액션 객체를 생성하는 작업을 처리하는 이라는 함수가 있기 때문
// 슬라이스의 이름을 정의하고 리듀서 함수가 포함된 개체를 작성하면 해당 작업 코드가 자동으로 생성된다. 
// 옵션 의 문자열 name(counter)은 각 동작 유형의 첫 번째 부분으로 사용되며 각 reducer 함수의 키 이름은 두 번째 부분으로 사용된다. 
// 그래서 "counter"이름 + "increment"리듀서 함수가 액션 타입을 생성!! 우리는 reducer안에 타입의 이름(increment)만 작성하면 된다



export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
