import React, { useEffect, useMemo, useState } from "react";

// cleanup 함수의 실행

export const UseEffectStudy3 = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("effect");
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{number}cleanup 함수란!</div>;
};

// useEffect는 구성요소를 렌더링 한 후에 useEffect를 실행한다

// clearInterval()는 s
// etInterval()에 대한 호출로 설정된 시간 반복 작업을 취소합니다
// clearInterval(intervalID-취소하려는 반복 작업의 식별자)
