import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addComment } from "../Redux/modules/commentSlice";

const CommentInput = ({postId}) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const commentAdd = () =>{
    const newComment = {
      comment : comment,
      user : { username : 'thdud'},
      commentId : Math.floor(Math.random()*100),
      todosId: postId
    }
    console.log(newComment)
    dispatch(addComment(newComment))
  }
  return (
    <>
      <Box>
        <input 
          type='text'
          value = {comment || ""}
          placeholder ='댓글을 입력해주세요'
          onChange = {(e)=>{
            // console.log(e.target.value)
            setComment(e.target.value)
          }}
        />
        <button onClick={commentAdd}>등록</button>
      </Box>
    </>
  )
}
const Box = styled.div`

`
export default CommentInput;