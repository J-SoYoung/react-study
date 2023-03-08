import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addComment } from "../Redux/modules/commentSlice";

const CommentInput = ({ postId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const commentAdd = () => {
    const newComment = {
      comment: comment,
      user: { username: "thdud" },
      commentId: Math.floor(Math.random() * 100),
      todosId: postId,
    };
    dispatch(addComment(newComment));
    setComment("");
  };

  return (
    <>
      <Box>
        <input
          type="text"
          value={comment || ""}
          placeholder="댓글을 입력해주세요"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button onClick={commentAdd}>등록</button>
      </Box>
    </>
  );
};
const Box = styled.div`
  margin-bottom: 20px;
  input {
    width: 90%;
    height: 30px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  button {
    width: 40px;
    height: 30px;
  }
`;
export default CommentInput;
