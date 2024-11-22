'use client';

import { Controls, ReactFlow, ReactFlowProvider, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

export function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);


  return (
    <div className='h-full w-full relative p-4'>
      <ReactFlowProvider>
        <ReactFlow edges={initialEdges} nodes={nodes} onNodesChange={onNodesChange} />

        <Controls
          position='bottom-right'
          showFitView={false}
          showZoom={false}
          className='bg-slate-300 rounded hover:bg-slate-400 transition-all'
        />
      </ReactFlowProvider>
    </div>
  );
}
