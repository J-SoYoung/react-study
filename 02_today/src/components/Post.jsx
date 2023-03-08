import React from "react";
//
export const Post = React.forwardRef(({ post }, ref) => {
  console.log(post);
  const postBody = (
    <>
      <p>title: {post.title}</p>
      <p>날짜: {post.createdAt.split("T")[0]}</p>
    </>
  );

  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
});
