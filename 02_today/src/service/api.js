import axios from "axios";

export const getPostsData = async () => {
  const res = await axios.get(`https://koreanjson.com/posts`);
  return res;
};
