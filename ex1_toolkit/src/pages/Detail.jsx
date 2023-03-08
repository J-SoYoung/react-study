import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


// style
import styled from "styled-components";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import CommentInput from "../components/CommentInput";
import { delComment, editComment } from "../Redux/modules/commentSlice";


const Detail  = ()=>{
  const dispatch = useDispatch()
  const params = useParams()
  // console.log(params.id)

  const todos= useSelector((state)=>state.todos)
  const todo = todos.todos.filter((t)=> {return +t.todosId === +params.id })

  const comments = useSelector((state)=>state.comments)
  const comment = comments.comments
    .filter((com)=> {return +com.todosId === +params.id })
  console.log(comment)

  const commentDel = (commentId) => {
    dispatch(delComment(commentId))
  }
  const commentEditStart = () => {
    // dispatch(editStartComment)
  }

  return (
    <Box>
      <div className="box_div">
        <p>제목: {todo[0].title}</p>
        <p>내용: {todo[0].content}</p>
        <CommentInput postId={params.id}/>
        <div>
            {comment.map((c)=>{
            return (
              <div key={c.commentId} className="comment_box">
                <p>{c.user.username} : {c.comment} </p>
                <button onClick={()=>{commentDel(c.commentId)}}>삭제</button>
                <button onClick={commentEditStart}>수정</button>
              </div>
            )
          })}
        </div>
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
    border: 1px solid black;
  }
  .comment_box{
    background-color: yellow;
  }
`

export default Detail;   