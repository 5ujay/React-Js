import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="px-10">
      <h1 className="py-2 text-3xl font-semibold">useState</h1>
      <div>Count : {count}</div>

      <div className="py-4 flex gap-4">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-black px-10 py-2 rounded-lg text-white "
        >
          Click +
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          className="bg-black px-10 py-2 rounded-lg text-white "
        >
          Click -
        </button>
      </div>
    </div>
  );
};

export default UseState;
