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
import { CSSProperties, useState } from 'react';

import {
  initialEdgesCourses,
  initialNodesCourses,
} from '@/app/utils/CoursesNodes';

import { CustomNodeCourse } from './CustomNodeCourse';

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

  const [selectedNodeSlug, setSelectedNodeSlug] = useState<string>('');
  const nodeLink = NODE_LINKS[selectedNodeSlug] || NODE_LINKS['default'];

  function handleNodeClick(_event: React.MouseEvent, node: Node) {
    setSelectedNodeSlug(node.data.slug as string);
  }

  return (
    <div className="relative h-full w-full p-4">
      <ReactFlowProvider>
        <Link href={nodeLink} target="_blank">
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
    </div>
  );
}
