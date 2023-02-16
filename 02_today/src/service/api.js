import axios from "axios";

export const getTodosData = async () => {
  const res = await axios.get(`https://koreanjson.com/todos`);
  return res;
};

export const getPostsData = async () => {
  const res = await axios.get(`https://koreanjson.com/posts`);
  return res;
};
