import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import FiveMultiple from "./components/FiveMultiple";

function App() {
  const [count, setCount] = useState(0); // state hooks 생성
  const [text, setText] = useState(""); // state hooks 생성
  const didMountRef = useRef(false);

  const handleSetCount = (val) => {
    setCount(count + val);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    // count, text 값이 변경될 때 실행되는 함수
    console.log("component updating : ", text, count);
  }, [count, text]);

  useEffect(() => {
    // App Component가 렌더링 할 때마다 수행 됨.
    console.log("매번 수행....");
  });

  // 최초 렌더링 될 때는 수행되지 않고, rerender 될때만 수행하도록 하고 싶다면
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    console.log("updating...");
  });

  // 컴포넌트가 mount 될때 콜백 함수 호출
  useEffect(() => {
    console.log("컴포넌트 마운트...");
  }, []);

  useEffect(() => {
    const intervalThick = setInterval(() => {
      console.log("thick!");
    }, 1000);

    return () => {
      // clean up 하고 싶은 컴포넌트를 클리어
      console.log("clean up");
      clearInterval(intervalThick);
    };
  });

  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
        <input type="text" onChange={handleTextChange} value={text} />
      </section>
      <section>
        <Viewer count={count} />
        {/* 논리연산자인 경우 */}
        {count % 5 === 0 && <FiveMultiple />}
        {/* {count % 5 === 0 ? <FiveMultiple /> : null}  삼항 연산자로 했을경우 */}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
