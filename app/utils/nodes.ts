import { Edge, MarkerType, Node } from '@xyflow/react';

export const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Arrays & Hashing' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '2',
    position: { x: -100, y: 130 },
    data: { label: 'Two Pointers' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '3',
    position: { x: 100, y: 130 },
    data: { label: 'Stack' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '4',
    position: { x: -200, y: 230 },
    data: { label: 'Binary Search' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '5',
    position: { x: 0, y: 230 },
    data: { label: 'Sliding Window' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '6',
    position: { x: 200, y: 230 },
    data: { label: 'Linked List' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '7',
    position: { x: -100, y: 330 },
    data: { label: 'Trees' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '8',
    position: { x: -350, y: 430 },
    data: { label: 'Tries' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '9',
    position: { x: 300, y: 430 },
    data: { label: 'Backtracking' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '10',
    position: { x: -200, y: 530 },
    data: { label: 'Heap/ Priority Queue' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '11',
    position: { x: 200, y: 530 },
    data: { label: 'Graphs' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '12',
    position: { x: 500, y: 530 },
    data: { label: '1-D DP' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '13',
    position: { x: -330, y: 630 },
    data: { label: 'Intervals' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '14',
    position: { x: -130, y: 630 },
    data: { label: 'Greedy' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '15',
    position: { x: 70, y: 630 },
    data: { label: 'Advanced Graphs' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '16',
    position: { x: 380, y: 630 },
    data: { label: '2-D DP' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '17',
    position: { x: 560, y: 630 },
    data: { label: 'Bit Manipulation' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '18',
    position: { x: 330, y: 730 },
    data: { label: 'Math & Geometry' },
    style: {
      backgroundColor: '#454d9e',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
];

export const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e2-6',
    source: '2',
    target: '6',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e4-7',
    source: '4',
    target: '7',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e7-8',
    source: '7',
    target: '8',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e7-9',
    source: '7',
    target: '9',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e7-10',
    source: '7',
    target: '10',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e9-11',
    source: '9',
    target: '11',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e9-12',
    source: '9',
    target: '12',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e10-13',
    source: '10',
    target: '13',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e10-14',
    source: '10',
    target: '14',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e10-15',
    source: '10',
    target: '15',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e11-15',
    source: '11',
    target: '15',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e11-16',
    source: '11',
    target: '16',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e11-18',
    source: '11',
    target: '18',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e12-16',
    source: '12',
    target: '16',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e12-17',
    source: '12',
    target: '17',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
  {
    id: 'e17-18',
    source: '17',
    target: '18',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFFFF',
    },
  },
];
