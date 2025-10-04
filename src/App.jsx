import { useState } from "react";
import "./App.css";
import FunctionCounter from "./FunctionCounter";
import ClassCounter from "./ClassCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen">
      <p className="text-2xl flex justify-center my-3">
        Assignment-2 Counter Application
      </p>
      <div className=" h-1/2 w-screen bg-red-400 grid grid-cols-2 justify-between">
        <div className="flex flex-col items-center justify-center rounded-xl shadow shadow-lg p-6">
          <p className="text-xl font-semibold mb-4">Function Component</p>
          <FunctionCounter />
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl shadow shadow-lg p-6">
          <p className="text-xl font-semibold mb-4">Class Component</p>
          <ClassCounter></ClassCounter>
        </div>
      </div>
    </div>
  );
}

export default App;
