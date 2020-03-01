import { useState, useEffect } from "react";
import { wait } from "../utilities";

function useKeyboardEffect(text, duration = 500) {
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
      if (text.length < index) return;
      await wait(duration + (Math.random() - 0.5));
      setCurrent(<>
        {splitNewLine(text.slice(0, index))}
        <span className='cursor'></span>
      </>);
      type(index + 1);
    };
    type();
  }, []);

  return current;
}

export default useKeyboardEffect;
