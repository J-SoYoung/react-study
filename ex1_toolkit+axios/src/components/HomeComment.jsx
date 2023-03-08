import styled from "styled-components";


const HomeComment = (todos, idx) => {
  const todo = todos.todos.comments
  
  return (
    <>
      <Box>
        { todo === undefined? 
          null 
        : 
          <p>댓글 :{todo?.map((t)=> <span>{t.comment}</span>)} </p> 
        }
        {/* <p>댓글 : {todo? todo[0] : null }</p> */}
      </Box>
    </>
  )
}

const Box = styled.div`
  /* border: 1px solid red; */

`
export default HomeComment;