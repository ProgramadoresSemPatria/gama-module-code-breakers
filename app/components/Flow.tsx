'use client';

import {
  Controls,
  Node,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { CSSProperties, useState } from 'react';

import { initialEdges, initialNodes } from '@/app/utils/nodes';

import { Modal } from './Modal';

const styles: CSSProperties = {
  backgroundColor: '#13181c',
  width: '100%',
  height: 300,
};

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

  const nodeData =
    selectedNode && typeof selectedNode.data.label === 'string'
      ? { id: selectedNode.id, label: selectedNode.data.label }
      : null;

  return (
    <div className="relative h-full w-full p-4">
      <ReactFlowProvider>
        <ReactFlow
          edges={initialEdges}
          nodes={nodes}
          onNodesChange={onNodesChange}
          style={styles}
          fitView
          onNodeClick={handleNodeClick}
        />

        <Controls
          position="bottom-right"
          showFitView={false}
          showZoom={false}
          className="rounded bg-slate-300 transition-all hover:bg-slate-400"
        />
      </ReactFlowProvider>

      <Modal isOpen={isModalOpen} onClose={closeModal} nodeData={nodeData} />
    </div>
  );
}
