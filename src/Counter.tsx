import React, { useState } from "react";

function Counter() {
  const [count, seCount] = useState<number>(0);
  const onIncrease = () => seCount((prevCount) => ++prevCount);
  const onDecrease = () => seCount((prevCount) => --prevCount);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
