import { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodos } from "../Redux/modules/todosSlice";

const FormInput = () => {
  const dispatch = useDispatch()

  const [ title, setTitle ]= useState();
  const [ content, setcontent ]= useState();
  const [ state, setState ] = useState({ title:"",content:""})

    const inputHandler =(e) => {
      setState({
        ...state,
        [e.target.name] : e.target.value
      })
    }
    
  const addTodoBtn = (e) => {
    e.preventDefault();
    setTitle("")
    setcontent("")
    dispatch(__addTodos(state))
  }

  return (
    <>
      <div className='contain'>
        <div className='input_contain'>
          <div className='input_topic input_box'>
            <span>제목</span>
            <input 
              name = 'title'
              value={ state.title || ""}
              onChange={inputHandler}
              type='text' 
              placeholder='오늘의 할일'
            />
          </div>
          <div className='input_text input_box'>
            <span>내용</span>
            <textarea 
              name = 'content'
              value={ state.content || ""}
              onChange={inputHandler}
              type= 'text' 
              placeholder='내용을 작성해주세요'
            />
          </div>
          <button onClick={addTodoBtn}>Add TO DO</button>
        </div>
      </div>
    </>
  )
}
export default FormInput;