'use client';

import { Controls, ReactFlow, ReactFlowProvider, useNodesState, Node, MarkerType, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState } from 'react';
import { Modal } from './Modal';

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
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
        
        <ReactFlow edges={initialEdges} nodes={nodes} onNodesChange={onNodesChange} style={{ backgroundColor: '#13181c' }}  onNodeClick={handleNodeClick} />


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
