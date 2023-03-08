import React from "react";
import styled from "styled-components";

const Post = React.forwardRef(({ post }, ref) => {
  const postBody = (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>POST_ID: {post.id}</p>
    </>
  );

  const content = ref ? <Box ref={ref}>{postBody}</Box> : <Box>{postBody}</Box>;

  return content;
});
const Box = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
`;
export default Post;
