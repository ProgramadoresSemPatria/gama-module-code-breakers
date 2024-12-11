'use client';

import { Handle, Position } from '@xyflow/react';

import { useGlobalStore } from '@/app/globalStore';
import { topicsContent } from '@/app/utils/topicsContent';

import { ProgressBar } from './ProgressBar';

interface CustomNodeData {
  label: string;
  slug: string;
  style?: {
    color?: string;
    fontWeight?: string;
    cursor?: string;
  };
}

export function CustomNode({ data }: { data: CustomNodeData }) {
  const { getTopicProgress } = useGlobalStore();
  const { problemsCompleted } = getTopicProgress(data.slug);

  const totalTopicProblems = topicsContent[data.slug].problems.length;

  return (
    <div
      className="custom-node flex w-[150px] flex-col items-center justify-center rounded-md bg-[#454d9e]"
      style={{
        color: data.style?.color,
        fontWeight: data.style?.fontWeight,
        cursor: data.style?.cursor,
      }}
    >
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <Handle type="source" position={Position.Bottom} className="opacity-0" />

      <div className="flex flex-col items-center">
        <h3 className="mt-2 max-w-full truncate text-sm font-bold">
          {data.label}
        </h3>

        <div className="flex w-full justify-center">
          <ProgressBar
            total={totalTopicProblems}
            progress={problemsCompleted.length}
            className="mx-auto mb-4 mt-1 w-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
