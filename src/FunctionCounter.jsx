import React, { useState } from "react";

const FunctionCounter = () => {
  const [data, setData] = useState(0);
  return (
    <div className="bg-blue-500 grid grid-rows-2 gap-5 rounded-xl p-5 shadow shadow-2xl shadow-black">
      <p className="text-center">{data}</p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setData(data + 1);
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            if (data > 0) {
              setData(data - 1);
            }
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default FunctionCounter;
