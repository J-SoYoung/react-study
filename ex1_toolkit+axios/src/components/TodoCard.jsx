import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodos, editEndTodos, editStartTodos, __getTodos } from "../Redux/modules/todosSlice";
import CommentInput from "./CommentInput";
import HomeComment from "./HomeComment";

const TodoCard = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const todoList = useSelector((state)=>state.todos.todos)
  const [ state, setState ] = useState({ title:"",content:""})

  
  // 데이터 가져오기
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);


    const inputHandler =(e) => {
      setState({
        ...state,
        [e.target.name] : e.target.value
      })
    }
    
    
  // data삭제
  const deleteBtn= (id) => {
    dispatch(deleteTodos(id))  
  } 

  const editStartBtn = (id) =>{
    dispatch(editStartTodos(id)) 
  }

  const editEndBtn = (id) =>{
    dispatch(editEndTodos({id, state})) 
  }

  const doneBtn = (id) =>{
    // dispatch(doneUser) 완료 
  }

  return(
    <Cardbox>
      {todoList?.map((todos, idx)=>{
        return (!todos.isEdit? 
          <div key={todos.todosId} className='card'>
            <h3 
            onClick={()=>{navigate(`detail/${todos.todosId}`)}} 
            style={{cursor: 'pointer'}}>
              {todos.title}
            </h3>
            <p >{todos.content}</p> 
            <HomeComment todos={todos} idx={idx}/>
            <div className='btn_box'>
              <button onClick={()=>{editStartBtn(todos.todosId)}}>수정</button>
              <button onClick={()=>{deleteBtn(todos.todosId)}}>삭제</button>
              <button onClick={()=>{doneBtn(todos.todosId)}}>
                {!(todos.isdone)? "완료" : "취소"} 
              </button> 
            </div>
          </div>
        :        

        <div className='card'>
          <input 
            name = 'title'
            onChange={inputHandler}
            type='text' 
            defaultValue={todos.title}
          />
          <textarea 
            name = 'content'
            onChange={inputHandler}
            type= 'text' 
            defaultValue={todos.content}
          />
          {/* <HomeComment todos={todos} todosId={todos.todosId} /> */}
          <div className='btn_box'>
            <button onClick={()=>{editEndBtn(todos.todosId)}}>수정완료</button>
            <button onClick={()=>{deleteBtn(todos.todosId)}}>삭제</button>
            <button onClick={()=>{doneBtn(todos.todosId)}}>
              {!(todos.isdone)? "완료" : "취소"} 
            </button> 
          </div>
        </div>
        )
      })}
    </Cardbox>
  )
}
const Cardbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .card {
    width: 350px;
    height: 350px;
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;  
    margin: 10px 10px ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    border-bottom: 2px solid #ffec99;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .card p {
    height: 100%;
    padding-top: 10px;
  }
  
  .card .btn_box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card button {
    border: none;
    padding: 7px 15px;
    margin-right: 10px;
  } 
`


export default TodoCard;