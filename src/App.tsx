import React, { useRef, useEffect } from "react";
import Whiteboard from "./components/canvas/Whiteboard";
import Bar from "./components/bar";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Bar />
      <Whiteboard />
    </div>
  );
}

export default App;
