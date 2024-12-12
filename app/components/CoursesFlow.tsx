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

import Link from 'next/link';
import { CSSProperties, useEffect, useState } from 'react';

import { TopicContent, topicsContent } from '@/app/utils/topicsContent';

import { CustomNodeCourse } from './CustomNodeCourse';
import { Modal } from './Modal';
import {
  initialEdgesCourses,
  initialNodesCourses,
} from '../utils/CoursesNodes';

const styles: CSSProperties = {
  backgroundColor: '#13181c',
  width: '100%',
  height: 300,
};

const NODE_LINKS: { [key: string]: string } = {
  'algorithms-&-data-structures-for-beginners':
    'https://neetcode.io/courses/dsa-for-beginners/0',
  'advanced-algorithms': 'https://neetcode.io/courses/advanced-algorithms/0',
  'system-design-for-beginners':
    'https://neetcode.io/courses/system-design-for-beginners/0',
  'objected-oriented-design-interviews':
    'https://neetcode.io/courses/ood-interview/0',
  'system-design-interview':
    'https://neetcode.io/courses/system-design-interview/0',
  'sull-stack-development': 'https://neetcode.io/courses/full-stack-dev/0',

  default: '',
};

const nodeTypes: NodeTypes = {
  custom: CustomNodeCourse,
};

export function CoursesFlow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodesCourses);
  const [selectedTopic, setSelectedTopic] = useState<TopicContent | null>(null);
  const [selectedNodeLink, setSelectedNodeLink] = useState<string | null>(null);

  const [selectedNodeLabel, setSelectedNodeLabel] = useState<string | null>(
    null,
  );
  const [selectedNodeSlug, setSelectedNodeSlug] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const nodeLink = NODE_LINKS[selectedNodeSlug] || NODE_LINKS['default'];

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
        <Link href={nodeLink}>
          <ReactFlow
            edges={initialEdgesCourses}
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            style={styles}
            fitView
            onNodeClick={handleNodeClick}
          />
        </Link>

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
