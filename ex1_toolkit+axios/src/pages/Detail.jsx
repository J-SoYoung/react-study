import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";


// style
import styled from "styled-components";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import CommentInput from "../components/CommentInput";
import CommentItem from "../components/CommentItem";

const Detail  = ()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const todos= useSelector((state)=>state.todos)
  const todo = todos.todos.filter((t)=> {return +t.todosId === +params.id })
  
  return (
    <Box>
      <div className="box_div">
        <div className="box_list">
          <p>제목: {todo[0].title}</p>
          <p>내용: {todo[0].content}</p>
        </div>
        <CommentInput postId={params.id}/>
        <div>
          <CommentItem postId={params.id}/>
        </div>
        <button onClick={()=>{navigate('/')}}>돌아가기</button>
      </div>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box_div{
    width: 500px;
    height: 500px;
    background-color: #ffec99;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
    .box_list{
      background-color: white;
      border-radius: 10px;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }
  }
  .comment_box{
    width: 100%;
    height: 50px;
    border-radius: 10px;    
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default Detail;   