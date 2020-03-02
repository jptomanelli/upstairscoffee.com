import { useState, useEffect } from "react";
import { wait } from "../utilities";

function useKeyboardEffect(text, options = {}) {

  const { duration, onComplete } = {
    duration: 500,
    onComplete: () => {},
    ...options
  };

  const [current, setCurrent] = useState("");
  const splitNewLine = str =>
    str.split("\n").map((s, i, arr) => (
      <>
        {s}
        {i !== arr.length - 1 ? <br /> : <></>}
      </>
    ));

  useEffect(() => {
    const type = async (index = 0) => {
      if (text.length < index) {
        onComplete();
        return;
      }
      await wait(duration + (Math.random() - 0.5));
      setCurrent(
        <>
          {splitNewLine(text.slice(0, index))}
        </>
      );
      type(index + 1);
    };
    type();
  }, []);

  return current;
}

export default useKeyboardEffect;
