import { useRef, useCallback } from "react";
import { Post } from "./Post";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getInfinitePostsData } from "../service/api";

const PostExample = () => {
  const {
    fetchNextPage, //function
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    status,
    error,
  } = useInfiniteQuery(
    ["posts"],
    ({ pageParam = 1 }) => getInfinitePostsData(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
        // getNextPageParam은 함수이고, 미지막 페이지를 가져온다.
        // 함수에서 하고 싶은 일은 마지막 페이지의 길이를 반환하는 것이다
        // 마지막 페이지 갯수가 있으면 현재 수신된 페이지에 +1을 하라.
        // +1을 하고 다시 마지막페이지를 확인했을 때, undefined가 나오면
        // 마지막 페이지인 hasNextPage는 false값이 나오게된다
      },
    }
  );

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!");
          fetchNextPage();
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (status === "error")
    return <p className="center">Error: {error.message}</p>;

  const content = data?.pages.map((pg) => {
    return pg.map((post, i) => {
      if (pg.length === i + 1) {
        return <Post ref={lastPostRef} key={post.id} post={post} />;
      }
      return <Post key={post.id} post={post} />;
    });
  });

  return (
    <>
      <h1 id="top">
        &infin; Infinite Query &amp; Scroll
        <br />
      </h1>
      {content}
      {isFetchingNextPage && <p className="center">Loading More Posts...</p>}
      <p className="center">
        <a href="#top">Back to Top</a>
      </p>
    </>
  );
};
export default PostExample;
