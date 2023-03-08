import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delComment, editComment, editEndComment, editStartComment, __getComments } from "../Redux/modules/commentSlice";

const CommentItem = ({postId}) =>{
  const dispatch = useDispatch()
  const comments = useSelector((state)=>state.comments)
  const comment = 
  comments.comments.filter((com)=> {return +com.todosId === +postId })

  // // 데이터 가져오기
  // useEffect(() => {
  //   dispatch(__getComments());
  // }, [dispatch]);


  const commentDel = (commentId) => {
    dispatch(delComment(commentId))
  }
  const commentEditStart = (id) => {
    dispatch(editStartComment(id))
  }
  const commentEditEnd = (id) => {
    // dispatch(editEndComment({id}))
  }

  return ( 
  <> 댓글주세여
    {comment?.map((c)=>{
      return (
        <div key={c.commentId} className="comment_box">
          <p>{c.user.username} : {c.comment} </p>
          <div>
            <button onClick={()=>{commentDel(c.commentId)}}>
              삭제
            </button>
            <button onClick={commentEditStart(c.commentId)}>
              수정
            </button>
          </div>
        </div>
      )
    })}
      </>
  )
}
export default CommentItem;