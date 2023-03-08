import axios from "axios";

// 아래는 임시로 사용할 mockURL
const mockURL = axios.create({
  baseURL: "http://localhost:3005",
});

const baseURL = axios.create({
  baseURL: "",
  headers: {
    "Access-Control-Allow-Origin": "*",
    // Authorization: `${loadItem('success')}`,
  },
});

// 게시글 전체 조회
export const getPosts = async () => {
  const response = await mockURL.get();
  return response;
};

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPostPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/posts?_page=${pageParam}`, options);
  return response.data;
};
