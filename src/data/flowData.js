export const initialNodes = [
    {
      id: "0",
      position: { x: -300, y: 300 },
      data: {
        label: "Initial State",
      },
      type: "input",
      sourcePosition: "right",
      style: { backgroundColor: "#6ede87", color: "white" },
    },
    {
      id: "1",
      position: { x: 0, y: 60 },
      data: { label: "Research" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "2",
      position: { x: 0, y: 180 },
      data: { label: "Planning" },
      targetPosition: "left",
      type: "step",
  
      sourcePosition: "right",
      style: { backgroundColor: "#82B3E8", stroke: "red", color: "white" },
    },
    {
      id: "3",
      position: { x: 0, y: 300 },
      data: { label: "Designing" },
      targetPosition: "left",
  
      sourcePosition: "right",
      style: { backgroundColor: "#E96343", color: "white" },
    },
    {
      id: "4",
      position: { x: 0, y: 440 },
      data: { label: "Manufacturing" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#E8919D", color: "white" },
    },
    {
      id: "5",
      position: { x: 0, y: 580 },
      data: { label: "Sales/Marketing" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#A684EB", color: "white" },
    },
  
    // children Nodes
    {
      id: "6",
      position: { x: 250, y: 30 },
      data: { label: "External" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "7",
      type: "output",
      position: { x: 250, y: 90 },
      data: { label: "Internal" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "8",
      position: { x: 250, y: 140 },
      data: { label: "PRD" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#82B3E8", color: "white" },
    },
    {
      id: "9",
      position: { x: 250, y: 200 },
      data: { label: "Specs" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#82B3E8", color: "white" },
    },
    {
      id: "10",
      position: { x: 250, y: 260 },
      data: { label: "Hardware" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#E96343", color: "white" },
    },
    {
      id: "11",
      position: { x: 250, y: 340 },
      data: { label: "Software" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#E96343", color: "white" },
    },
    {
      id: "12",
      position: { x: 250, y: 400 },
      data: { label: "Material" },
      targetPosition: "left",
      type: "output",
      sourcePosition: "right",
      style: { backgroundColor: "#E8919D", color: "white" },
    },
    {
      id: "13",
      position: { x: 250, y: 480 },
      data: { label: "Production" },
      targetPosition: "left",
      type: "output",
      sourcePosition: "right",
      style: { backgroundColor: "#E8919D", color: "white" },
    },
    {
      id: "14",
      position: { x: 250, y: 550 },
      data: { label: "Online" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#A684EB", color: "white" },
    },
    {
      id: "15",
      position: { x: 250, y: 620 },
      data: { label: "DealerShip" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#A684EB", color: "white" },
    },
  
    // subChildren Nodes
    {
      id: "16",
      position: { x: 450, y: 0 },
      data: { label: "B2B" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "17",
      position: { x: 450, y: 60 },
      data: { label: "B2C" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
  
    // B-SubChildrenNodes
  
    {
      id: "18",
      position: { x: 750, y: -50 },
      data: { label: "Online" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "19",
      position: { x: 750, y: -10 },
      data: { label: "InterView" },
      type: "output",
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "20",
      position: { x: 750, y: 30 },
      data: { label: "Public Data" },
      targetPosition: "left",
      type: "output",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "21",
      position: { x: 750, y: 70 },
  
      data: { label: "Health" },
      targetPosition: "left",
      sourcePosition: "right",
      style: { backgroundColor: "#2A4494", color: "white" },
    },
    {
      id: "22",
      position: { x: 1050, y: 0 },
      data: { label: "To Be Continued...." },
      targetPosition: "left",
      sourcePosition: "left",
      style: { backgroundColor: "red", color: "white" },
    },
  ];
  
  export const initialEdges = [
    { id: "e0-1", source: "0", target: "1", type: "smoothstep", },
    { id: "e0-2", source: "0", target: "2", type: "smoothstep" },
    { id: "e0-3", source: "0", target: "3", type: "smoothstep" },
    { id: "e0-4", source: "0", target: "4", type: "smoothstep" },
    { id: "e0-5", source: "0", target: "5", type: "smoothstep" },
    { id: "e1-6", source: "1", target: "6", type: "smoothstep" },
    { id: "e1-7", source: "1", target: "7", type: "smoothstep" },
  
    { id: "e2-8", source: "2", target: "8", type: "smoothstep" },
    { id: "e2-9", source: "2", target: "9", type: "smoothstep" },
  
    { id: "e3-10", source: "3", target: "10", type: "smoothstep" },
    { id: "e3-11", source: "3", target: "11", type: "smoothstep" },
  
    { id: "e4-12", source: "4", target: "12", type: "smoothstep" },
    { id: "e4-13", source: "4", target: "13", type: "smoothstep" },
  
    { id: "e5-14", source: "5", target: "14", type: "smoothstep" },
    { id: "e5-15", source: "5", target: "15", type: "smoothstep" },
  
    { id: "e6-16", source: "6", target: "16", type: "smoothstep" },
    { id: "e6-17", source: "6", target: "17", type: "smoothstep" },
  
    { id: "e16-18", source: "16", target: "18", type: "smoothstep" },
    { id: "e16-19", source: "16", target: "19", type: "smoothstep" },
    { id: "e16-20", source: "16", target: "20", type: "smoothstep" },
    { id: "e16-21", source: "16", target: "21", type: "smoothstep" },
  
    { id: "e21-22", source: "21", target: "22", type: "smoothstep" },
    { id: "e18-22", source: "18", target: "22", type: "smoothstep" },
  ];
  