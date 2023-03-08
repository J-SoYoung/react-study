import { useState } from "react";

export const useInput = () => {
  const [value, setState] = useState("");
  const handleFunc = (e) => {
    console.log()
    setState(e.target.value);
  };
  return [value, handleFunc];
};
