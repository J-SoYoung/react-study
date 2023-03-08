import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UseEffectStudy } from "./useEffectFolder/1_UseEffectStudy";
import { UseEffectStudy2 } from "./useEffectFolder/2_UseEffectStudy";
import { UseEffectStudy3 } from "./useEffectFolder/3_UseEffectStudy";
import { UseEffectStudy4 } from "./useEffectFolder/4_UseEffectStudy";
import { Post } from "./useEffectFolder/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/usepage" element={<UseEffectStudy3 />} />
        <Route path="/" element={<UseEffectStudy4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
