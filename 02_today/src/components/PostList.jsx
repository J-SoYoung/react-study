import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";

import Lottie from "lottie-react";
import loading from "../assets/loading.json";
import { getPostsData } from "../service/api";

export const PostList = () => {
  const { data, isLoading, isError, isFetching } = useQuery(["posts"], () => {
    return getPostsData();
  });

  if (isLoading) {
    return (
      <>
        <Lottie animationData={loading} />
      </>
    );
  }
  return (
    <>
      <h1>POSTS</h1>
      {data?.data.map((d) => {
        return (
          <PostsBox key={d.id}>
            <p>title: {d.title}</p>
            <p>날짜: {d.createdAt.split("T")[0]}</p>
          </PostsBox>
        );
      })}
    </>
  );
};

const PostsBox = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange}; ;
`;
