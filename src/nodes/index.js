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
    position: { x: 0, y: -100 },
    data: { label: "Research" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "Planning" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "3",
    position: { x: 0, y: 300 },
    data: { label: "Designing" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "4",
    position: { x: 0, y: 500 },
    data: { label: "Manufacturing" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "5",
    position: { x: 0, y: 700 },
    data: { label: "Sales/Marketing" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  // childrens

  {
    id: "6",
    position: { x: 250, y: -50 },
    data: { label: "External" },
    type: "output",
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "7",
    position: { x: 250, y: -150 },
    data: { label: "Internal" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "8",
    position: { x: 250, y: 50 },
    data: { label: "PRD" },
    type: "output",
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "9",
    position: { x: 250, y: 150 },
    data: { label: "Specs" },
    type: "output",
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "10",
    position: { x: 250, y: 250 },
    data: { label: "Hardware" },
    type: "output",
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "11",
    position: { x: 250, y: 350 },
    data: { label: "Software" },
    type: "output",
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "12",
    position: { x: 250, y: 450 },
    data: { label: "Material" },
    targetPosition: "left",
    type: "output",
    sourcePosition: "right",
  },
  {
    id: "13",
    position: { x: 250, y: 550 },
    data: { label: "Production" },
    targetPosition: "left",
    type: "output",
    sourcePosition: "right",
  },
  {
    id: "14",
    position: { x: 250, y: 650 },
    data: { label: "Material" },
    type: "output",
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "15",
    position: { x: 250, y: 750 },
    data: { label: "Production" },
    type: "output",
    targetPosition: "left",
    sourcePosition: "right",
  },

  //   sub
  {
    id: "16",
    position: { x: 450, y: -170 },
    data: { label: "B2B" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "17",
    position: { x: 450, y: -120 },
    data: { label: "B2C" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  //   SUB2

  {
    id: "18",
    position: { x: 750, y: -100 },
    data: { label: "Online" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "19",
    position: { x: 750, y: -160 },
    data: { label: "InterView" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "20",
    position: { x: 750, y: -220 },
    data: { label: "Public Data" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "21",
    position: { x: 750, y: -280 },
    data: { label: "Health" },
    targetPosition: "left",
    sourcePosition: "right",
  },
  {
    id: "22",
    position: { x: 1050, y: -200 },
    data: { label: "To Be Continued...." },
    targetPosition: "left",

    sourcePosition: "left",
  },
];

export const initialEdges = [
  { id: "e0-1", source: "0", target: "1" },
  { id: "e0-2", source: "0", target: "2" },
  { id: "e0-3", source: "0", target: "3" },
  { id: "e0-4", source: "0", target: "4" },
  { id: "e0-5", source: "0", target: "5" },
  { id: "e1-6", source: "1", target: "6" },
  { id: "e1-7", source: "1", target: "7" },

  { id: "e2-8", source: "2", target: "8" },
  { id: "e2-9", source: "2", target: "9" },

  { id: "e3-10", source: "3", target: "10" },
  { id: "e3-11", source: "3", target: "11" },

  { id: "e4-12", source: "4", target: "12" },
  { id: "e4-13", source: "4", target: "13" },

  { id: "e5-14", source: "5", target: "14" },
  { id: "e5-15", source: "5", target: "15" },

  { id: "e7-16", source: "7", target: "16" },
  { id: "e7-17", source: "7", target: "17" },

  { id: "e16-18", source: "16", target: "18" },
  { id: "e16-19", source: "16", target: "19" },
  { id: "e16-20", source: "16", target: "20" },
  { id: "e16-21", source: "16", target: "21" },

  { id: "e21-22", source: "21", target: "22" },
  { id: "e18-22", source: "18", target: "22" },
];
