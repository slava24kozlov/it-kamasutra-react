import React, {useEffect, useLayoutEffect, useState} from "react";
import style from "./Music.module.css";
import Wrapper from "../common/Wrappers/WrapperComponents";

const eventLoop = () => {
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  function one() {
    console.log("One");
  }

  const promise = new Promise(function two(resolve) {
    console.log("Promise");
    resolve("Promise.then");
  });

  one();
  promise.then(res => console.log(res));
  console.log("Simple");
  queueMicrotask(() => console.log("queueMicrotask"));
};

const Music = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    console.log("useEffect");
  }, [state]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [state]);

  const handleChange = () => {
    eventLoop();
    setState(value => !value);
  };
  return (
    <Wrapper id="music" title="MUSIC" className={style.main}>
      <button style={{padding: "30px"}} onClick={handleChange}>Event loop</button>
      <strong style={{backgroundColor: "red", margin: "10px"}}>{state.toString()}</strong>
    </Wrapper>
  );
};

export default Music;
