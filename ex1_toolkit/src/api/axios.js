import axios from "axios";


export const baseURL = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// "content-type": "application/json;charset=UTF-8",
// accept: "application/json",



export const instance = axios.create({
  baseURL: "http://localhost:3005",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});

