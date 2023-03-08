import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";

// axios와 서버 연결 후 useEffec의 역할

export const UseEffectStudy4 = () => {
  return (
    <div>
      <p>
        <Link to="/post">go to the page </Link>
      </p>
      <p>
        <Link to="/usepage">go to the 22page </Link>
      </p>
    </div>
  );
};
