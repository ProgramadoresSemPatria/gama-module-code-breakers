'use client';

import { Controls, ReactFlow, ReactFlowProvider, useNodesState, Node, MarkerType, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState } from 'react';
import { Modal } from './Modal';

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Arrays & Hashing' } },
  { id: '2', position: { x: -100, y: 130 }, data: { label: 'Two Pointers' } },
  { id: '3', position: { x: 100, y: 130 }, data: { label: 'Stack' } },
  { id: '4', position: { x: -200, y: 230 }, data: { label: 'Binary Search' } },
  { id: '5', position: { x: 0, y: 230 }, data: { label: 'Sliding Window' } },
  { id: '6', position: { x: 200, y: 230 }, data: { label: 'Linked List' } },
  { id: '7', position: { x: -100, y: 330 }, data: { label: 'Trees' } },
  { id: '8', position: { x: -350, y: 430 }, data: { label: 'Tries' } },
  { id: '9', position: { x: 300, y: 430 }, data: { label: 'Backtracking' } },
  { id: '10', position: { x: -200, y: 530 }, data: { label: 'Heap/ Priority Queue' } },
  { id: '11', position: { x: 200, y: 530 }, data: { label: 'Graphs' } },
  { id: '12', position: { x: 500, y: 530 }, data: { label: '1-D DP' } },
  { id: '13', position: { x: -330, y: 630 }, data: { label: 'Intervals' } },
  { id: '14', position: { x: -130, y: 630 }, data: { label: 'Greedy' } },
  { id: '15', position: { x: 70, y: 630 }, data: { label: 'Advanced Graphs' } },
  { id: '16', position: { x: 380, y: 630 }, data: { label: '2-D DP' } },
  { id: '17', position: { x: 560, y: 630 }, data: { label: 'Bit Manipulation' } },
  { id: '18', position: { x: 330, y: 730 }, data: { label: 'Math & Geometry' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', 
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
  { id: 'e1-3', source: '1', target: '3', 
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
  { id: 'e2-4', source: '2', target: '4', 
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
  { id: 'e2-5', source: '2', target: '5', 
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
  { id: 'e2-6', source: '2', target: '6', 
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
  { id: 'e4-7', source: '4', target: '7', 
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
  { id: 'e6-7', source: '6', target: '7', 
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
  { id: 'e7-8', source: '7', target: '8', 
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
  { id: 'e7-9', source: '7', target: '9', 
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
  { id: 'e7-10', source: '7', target: '10', 
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
  { id: 'e9-11', source: '9', target: '11', 
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
  { id: 'e9-12', source: '9', target: '12', 
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
  { id: 'e10-13', source: '10', target: '13', 
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
  { id: 'e10-14', source: '10', target: '14', 
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
  { id: 'e10-15', source: '10', target: '15', 
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
  { id: 'e11-15', source: '11', target: '15', 
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
  { id: 'e11-16', source: '11', target: '16', 
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
  { id: 'e11-18', source: '11', target: '18', 
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
  { id: 'e12-16', source: '12', target: '16', 
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
  { id: 'e12-17', source: '12', target: '17', 
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
  { id: 'e17-18', source: '17', target: '18', 
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

export function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null); 
  const [isModalOpen, setModalOpen] = useState<boolean>(false); 

  const handleNodeClick = (_event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNode(null);
  };

  const nodeData = selectedNode && typeof selectedNode.data.label === 'string'
    ? { id: selectedNode.id, label: selectedNode.data.label }
    : null;


  return (
    <div className='h-full w-full relative p-4'>
      <ReactFlowProvider>
        
        <ReactFlow edges={initialEdges} nodes={nodes} onNodesChange={onNodesChange} style={{ backgroundColor: '#13181c' }} fitView  onNodeClick={handleNodeClick} />


        <Controls
          position='bottom-right'
          showFitView={false}
          showZoom={false}
          className='bg-slate-300 rounded hover:bg-slate-400 transition-all'
        />
      </ReactFlowProvider>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        nodeData={nodeData}
      />
    </div>
  );
}
