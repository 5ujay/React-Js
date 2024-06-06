import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const getCube = (num) => {
    console.log("Rednering page !");
    return Math.pow(num, 3);
  };

  //   const result = getCube(number);
  const result = useMemo(() => {
    getCube(number);
  }, [number]);

  return (
    <>
      <input
        type="text"
        className="border "
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>Cube of the number is : {result}</p>

      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-gray-200"
      >
        Click Me
      </button>
      <p>You click the button {count} times</p>
    </>
  );
};

export default UseMemo;
