import React, { useCallback, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { getPostPage } from "../../services/axios";
import Post from "./Post";

const InfiniteScroll = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    "posts",
    ({ pageParam = 1 }) => {
      return getPostPage(pageParam);
    },
    {
      // ??
      getNextPageParam: (lastpage, allPages) => {
        // console.log("lastpage-", lastpage, "all-", allPages);
        return lastpage.length ? allPages.length + 1 : undefined;
      },
    }
  );

  // 마지막 요소를 ref가 감지하고
  // observer도 요소를 감지하는데, 마지막 요소를 감지하게 되면
  // 데이터를 요청한다.
  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      // 뒤에 요소를 loading중에 있으면 마지막이 아니니까 return
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("마지막 페이지 다다름");
          fetchNextPage();
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isError) return <p className="center">Error: {error.message}</p>;

  const content = data?.pages.map((pg) => {
    return pg.map((post, i) => {
      if (pg.length === i + 1) {
        return (
          <PostBox ref={lastPostRef} key={post.id} post={post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>POST_ID: {post.id}</p>
          </PostBox>
        );
      }
      return (
        <PostBox key={post.id} post={post}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>POST_ID: {post.id}</p>
        </PostBox>
      );
    });
  });

  // props로 넘겨.
  // const content = data?.pages.map((pg) => {
  //   return pg.map((post, i) => {
  //     if (pg.length === i + 1) {
  //       return <Post ref={lastPostRef} key={post.id} post={post} />;
  //     }
  //     return <Post key={post.id} post={post} />;
  //   });
  // });

  return (
    <Box>
      <h1>
        &infin; infinite Query &amp; Scroll <br />
      </h1>
      {content}
      {isLoading && <p className="center"> Loading More Posts... </p>}
    </Box>
  );
};

const Box = styled.div`
  border: 3px solid red;
  font-size: 16px;
  width: 500px;
  height: 750px;
  overflow-y: scroll;
`;
const PostBox = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
`;
export default InfiniteScroll;
