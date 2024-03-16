import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./nodes";
const App = () => {
  const [poke, setPoke] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleclick = (event, node) => {
    setPoke(true);
    setPosition({ x: event.clientX, y: event.clientY });
    console.log(node);
  };

  return (
    <div style={{ width: "100%", height: "100vh", border: "2px solid gray" }}>
      <ReactFlow
        nodes={initialNodes}
        fitView
        onNodeMouseEnter={(event, node) => handleclick(event, node)}
        edges={initialEdges}
      />
      {poke && (
        <div
          style={{ position: "absolute", top: position.y, left: position.x }}
        >
          {"hiiiiiii"}
        </div>
      )}
    </div>
  );
};

export default App;
