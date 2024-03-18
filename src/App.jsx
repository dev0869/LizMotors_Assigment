// import { useState } from "react";
// import ReactFlow from "reactflow";
// import "reactflow/dist/style.css";
// import { initialEdges, initialNodes } from "./nodes";
// const App = () => {
//   const [poke, setPoke] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleclick = (event, node) => {
//     setPoke(true);
//     setPosition({ x: event.clientX, y: event.clientY });
//     console.log(node);
//   };

//   return (
//     <div style={{ width: "100%", height: "100vh", border: "2px solid gray" }}>
//       <ReactFlow
//         nodes={initialNodes}
//         fitView
//         onNodeMouseEnter={(event, node) => handleclick(event, node)}
//         onNodeMouseLeave={() => setPoke(false)}

//         edges={initialEdges}
//       />
//       {poke && (
//         <div
//           style={{ position: "absolute", backgroundColor: "white", top: position.y, left: position.x, width: '100px', height: '100px' }}
//         >
//           {"hiiiiiii"}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./nodes";

const App = () => {
  const [poke, setPoke] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  console.log(position);
  const handleclick = (event) => {

    setPosition({ x: event.clientX, y: event.clientY });
    setPoke(true);
  };

  const handleMouseLeave = () => {
    setPoke(false);
  };

  return (
    <div style={{ width: "100%", height: "100vh", border: "2px solid gray" }}>
      <ReactFlow
        nodes={initialNodes}
        fitView
        onNodeMouseEnter={(event, node) => handleclick(event, node)}
        onNodeMouseLeave={handleMouseLeave}
        edges={initialEdges}
      />

      <div onMouseEnter={() => setPoke(true)}
        style={{ position: "absolute", opacity: poke ? 1 : 0, transition: '0.5s', backgroundColor: "white", top: poke ? position.y : '', left: poke ? position.x : '', width: '100px', height: '100px' }}
      >
        {"hiiiiiii"}
      </div>


    </div>
  );
};

export default App;
