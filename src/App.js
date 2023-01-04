import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(
    // 1st arg: side effect (callback function)
  () => console.log("useEffect called"),
  // 2nd arg: dependencies array
  [count]
  );

  useEffect(() => {
    document.title = text;
  }, [text])

  useEffect(() => {
    setTimeout(() => setCount(0), 3000);
  }, [count]);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input 
        type="text" 
        value={text}
        onChange={(event)=> setText(event.target.value)}
      />
    </div>
  );
}

export default App;
