'use client';

import { Controls, ReactFlow, ReactFlowProvider, useNodesState, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState } from 'react';
import { Modal } from './Modal';

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
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


  return (
    <div className='h-full w-full relative p-4'>
      <ReactFlowProvider>
        <ReactFlow edges={initialEdges} nodes={nodes} onNodesChange={onNodesChange}  onNodeClick={handleNodeClick}/>

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
        nodeData={
          selectedNode && typeof selectedNode.data.label === 'string'
            ? { id: selectedNode.id, label: selectedNode.data.label }
            : null
        }
      />
    </div>
  );
}
