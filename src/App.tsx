import React, { useRef, useEffect } from "react";
import Whiteboard from "./components/canvas/Whiteboard";
import Bar from "./components/bar";

function App() {
  return (
    <div className="relative flex justify-center">
      <Bar />
      <Whiteboard />
    </div>
  );
}

export default App;
