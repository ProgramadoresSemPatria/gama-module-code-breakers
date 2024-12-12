import { Edge, MarkerType, Node } from '@xyflow/react';

export const initialNodesCourses: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 0, y: 0 },
    data: {
      label: 'Algorithms & Data Structures for Beginners',
      slug: 'algorithms-&-data-structures-for-beginners',
    },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '2',
    type: 'custom',
    position: { x: -200, y: 230 },
    data: { label: 'Advanced Algorithms', slug: 'advanced-algorithms' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 0, y: 230 },
    data: {
      label: 'System Design for Beginners',
      slug: 'system-design-for-beginners',
    },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 200, y: 230 },
    data: {
      label: 'Objected Oriented Design Interviews',
      slug: 'objected-oriented-design-interviews',
    },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '5',
    type: 'custom',
    position: { x: -100, y: 430 },
    data: { label: 'System Design Interview', slug: 'system-design-interview' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 100, y: 430 },
    data: { label: 'Full Stack Development', slug: 'sull-stack-development' },
    style: {
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  },
];

export const initialEdgesCourses: Edge[] = [
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
    id: 'e1-4',
    source: '1',
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
    id: 'e3-5',
    source: '3',
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
    id: 'e3-6',
    source: '3',
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
];
