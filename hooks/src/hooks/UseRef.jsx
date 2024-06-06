import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);
  //   const [count, setCount] = useState(0);

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const inputElement = useRef();

  const inputCall = () => {
    console.log(inputElement.current);

    inputElement.current.style.background = "Red";
  };

  return (
    <div>
      <h1 className="px-10 py-2 text-3xl font-semibold"> useRef Hook </h1>

      <div className="flex flex-col gap-10 px-10 ">
        <div>
          <div>Your value is : {value}</div>
          <div className="flex gap-4 ">
            <button
              className="bg-black px-10 py-2 text-2xl rounded-lg text-white"
              onClick={() => {
                setValue((prev) => prev + 1);
              }}
            >
              +
            </button>
            <button
              className="bg-black px-10 py-2 text-2xl rounded-lg text-white"
              onClick={() => {
                setValue((prev) => prev - 1);
              }}
            >
              -
            </button>
          </div>
          <h2>Your Render Number : {count.current} </h2>
        </div>

        {/* ========== */}

        <div className="">
          <input
            ref={inputElement}
            type="text"
            className="border border-black rounded-lg"
          />
          <br />
          <button
            onClick={inputCall}
            className="bg-black px-10 rounded-lg text-white"
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRef;
