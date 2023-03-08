import React, { useEffect, useMemo, useState } from "react";

// useEffect에서 cleanUp이 필요한 이유

export const UseEffectStudy2 = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("effect");

    return () => {
      console.log("wait, before running the effect");
      // 이전 효과를 정리할 수 있다
      // retuen함수를 실행하고 useEffec를 실행한다.
      console.log("ok, done, you can run");
    };
  }, [toggle]);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}> Toggle </button>
    </div>
  );
};
