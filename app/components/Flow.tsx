'use client';

import {
  Controls,
  Node,
  NodeTypes,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { CSSProperties, useEffect, useState } from 'react';

import { initialEdges, initialNodes } from '@/app/utils/nodes';
import { TopicContent, topicsContent } from '@/app/utils/topicsContent';

import CustomNode from './CustomNode';
import { Modal } from './Modal';

const styles: CSSProperties = {
  backgroundColor: '#13181c',
  width: '100%',
  height: 300,
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

export function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [selectedTopic, setSelectedTopic] = useState<TopicContent | null>(null);
  const [selectedNodeLabel, setSelectedNodeLabel] = useState<string | null>(
    null,
  );
  const [selectedNodeSlug, setSelectedNodeSlug] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  function handleNodeClick(_event: React.MouseEvent, node: Node) {
    const topicContent = topicsContent[node.data.slug as string];

    setSelectedTopic(topicContent);
    setSelectedNodeLabel(node.data.label as string);
    setSelectedNodeSlug(node.data.slug as string);

    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedTopic(null);
    setSelectedNodeLabel(null);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full p-4">
      <ReactFlowProvider>
        <ReactFlow
          edges={initialEdges}
          nodes={nodes}
          nodeTypes={nodeTypes}
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

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        topicContent={selectedTopic}
        nodeLabel={selectedNodeLabel}
        nodeSlug={selectedNodeSlug}
      />
    </div>
  );
}
