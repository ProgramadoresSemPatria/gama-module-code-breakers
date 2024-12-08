import { Edge, MarkerType, Node } from '@xyflow/react';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 0, y: 0 },
    data: { label: 'Arrays & Hashing', slug: 'arrays-&-hashing' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: -100, y: 130 },
    data: { label: 'Two Pointers', slug: 'two-pointers' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 100, y: 130 },
    data: { label: 'Stack', slug: 'stack' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: -200, y: 230 },
    data: { label: 'Binary Search', slug: 'binary-search' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 0, y: 230 },
    data: { label: 'Sliding Window', slug: 'sliding-window' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 200, y: 230 },
    data: { label: 'Linked List', slug: 'linked-list' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '7',
    type: 'custom',
    position: { x: -100, y: 330 },
    data: { label: 'Trees', slug: 'trees' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '8',
    type: 'custom',
    position: { x: -350, y: 430 },
    data: { label: 'Tries', slug: 'tries' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '9',
    type: 'custom',
    position: { x: 300, y: 430 },
    data: { label: 'Backtracking', slug: 'backtracking' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '10',
    type: 'custom',
    position: { x: -200, y: 530 },
    data: { label: 'Heap/ Priority Queue', slug: 'heap-priority-queue' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '11',
    type: 'custom',
    position: { x: 200, y: 530 },
    data: { label: 'Graphs', slug: 'graphs' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '12',
    type: 'custom',
    position: { x: 500, y: 530 },
    data: { label: '1-D DP', slug: '1-d-dp' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '13',
    type: 'custom',
    position: { x: -330, y: 630 },
    data: { label: 'Intervals', slug: 'intervals' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '14',
    type: 'custom',
    position: { x: -130, y: 630 },
    data: { label: 'Greedy', slug: 'greedy' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '15',
    type: 'custom',
    position: { x: 70, y: 630 },
    data: { label: 'Advanced Graphs', slug: 'advanced-graphs' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '16',
    type: 'custom',
    position: { x: 380, y: 630 },
    data: { label: '2-D DP', slug: '2d-dp' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '17',
    type: 'custom',
    position: { x: 560, y: 630 },
    data: { label: 'Bit Manipulation', slug: 'bit-manipulation' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '18',
    type: 'custom',
    position: { x: 330, y: 730 },
    data: { label: 'Math & Geometry', slug: 'math-&-geometry' },
    style: {
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
