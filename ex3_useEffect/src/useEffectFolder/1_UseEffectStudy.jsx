import React, { useEffect, useMemo, useState } from "react";

// useEffec의 동작, 의존성배열, useMemo
export const UseEffectStudy = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });

  const user = useMemo(
    () => ({
      name: state.name,
      selected: state.selected,
    }),
    [state.name, state.selected]
  );

  useEffect(() => {
    console.log(`The state has changee, useEffect run!`);
  }, [state]);

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };
  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add NAME</button>
      <button onClick={handleSelect}>Select</button>
      <div>
        <p>name : {state.name} </p>
        <p>select : {state.selected.toString()}</p>
      </div>
    </div>
  );
};

// useEffect는 구성요소를 렌더링 한 후에 useEffect를 실행한다
