// Login.jsx
import React, { useState, useCallback } from "react";

const Custom = () =>{
// state
const [text, setText] = useState({
  email: "",
  password: ""
});

// func
const onChange = useCallback(
  e => {
    const { value, name } = e.target;
    setText({ ...text, [name]: value });
  },
  [text]
);

return (
  <>
    <input id="email" value={text.email} onChange={onChange} />
    <input id="password" value={text.password} onChange={onChange} />
  </>
);
}


export default Custom