import styled from "styled-components";

const HomeComment = ({ comment, todosId }) => {
  const com = comment.filter((c) => c.todosId === todosId);
  return (
    <>
      <Box>
        <p>댓글 : {com[0] ? com[0].comment : null}</p>
      </Box>
    </>
  );
};

const Box = styled.div`
  ${({ theme }) => theme.borderStyle.basic}
`;
export default HomeComment;
