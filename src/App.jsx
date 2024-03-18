import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./nodes";

const App = () => {
  const [enablePos, setEnablePos] = useState(false);
  const [lable, setLable] = useState('')
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleclick = (event, node) => {
    setLable(node.data.label);
    setPosition({ x: event.clientX, y: event.clientY });
    setEnablePos(true);
  };


  return (
    <div style={{ width: "100%", height: "100vh", border: "2px solid gray" }}>
      <ReactFlow
        nodes={initialNodes}
        fitView
        onNodeMouseEnter={(event, node) => handleclick(event, node)}
        onNodeMouseLeave={() => setEnablePos(false)}
        edges={initialEdges}
      />

      <div
        onMouseEnter={() => setEnablePos(true)}
        style={{
          position: "absolute",
          opacity: enablePos ? 1 : 0,
          transition: "0.5s",
          backgroundColor: "gray",
          top: enablePos ? position.y : "",
          left: enablePos ? position.x : "",
          width: "300px",
          height: "100px",
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Name:{lable}</p>
          <p>Total Review</p>
          <p>Positive Review</p>
          <p>Comments</p>
        </div>
      </div>
    </div>
  );
};

export default App;
