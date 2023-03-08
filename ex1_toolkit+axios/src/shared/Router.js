import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Detail from "../pages/Detail";
import TodoCard from "../components/TodoCard.jsx";
import HomeComment from "../components/HomeComment.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        <Route path="/detail/:id" element={<HomeComment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
