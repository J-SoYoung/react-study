import axios from "axios";

export const getPostsData = async () => {
  const res = await axios.get(`https://koreanjson.com/posts`);
  console.log(res);
  return res;
};

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getInfinitePostsData = async (pageParam = 1, options = {}) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`, options);
  console.log(res);
  return res;
};

// export const connect = axios.interceptors.request.use((req)=>{
//   console.log(req)
// })
