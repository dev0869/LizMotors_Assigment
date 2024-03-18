import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./data/flowData";

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
    <div style={{ width: "100%", height: "100vh", }}>
      <p>LizMotors Assigment Answer Using React Flow</p>
      <ReactFlow
        nodes={initialNodes}
        fitView
        onNodeMouseEnter={(event, node) => handleclick(event, node)}
        onNodeMouseLeave={() => setEnablePos(false)}
        edges={initialEdges}
      />

      <div
        onMouseEnter={() => setEnablePos(true)}
        onMouseLeave={() => setEnablePos(false)}

        style={{
          fontSize: '14px',
          position: "absolute",
          padding: '12px',
          color: 'BLACK',
          boxShadow: '2px 2px 2px gray',
          opacity: enablePos ? 1 : 0,
          transition: "0.5s",
          backgroundColor: "#D9DDDC",
          top: enablePos ? position.y : "",
          left: enablePos ? position.x : "",
          width: "100px",
          height: "content-fit",
        }}
      >
        <p>Name:{lable}</p>
        <p>Total Review</p>
        <p>Positive Review</p>
        <p>Comments</p>

      </div>
    </div>
  );
};

export default App;

