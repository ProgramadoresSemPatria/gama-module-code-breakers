import { Handle, Node, Position } from '@xyflow/react';

import { ProgressBar } from './ProgressBar';

interface CustomNodeData {
  label: string;
  slug?: string;
  style?: {
    color?: string;
    fontWeight?: string;
    cursor?: string;
  };
}

const CustomNode = ({ data }: { data: CustomNodeData }) => {
  return (
    <div
      className="custom-node flex w-[150px] flex-col items-center justify-center rounded-md bg-[#454d9e]"
      style={{
        color: data.style?.color,
        fontWeight: data.style?.fontWeight,
        cursor: data.style?.cursor,
      }}
    >
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      <div className="flex flex-col items-center">
        <h3 className="mt-2 max-w-full truncate text-sm font-bold">
          {data.label}
        </h3>

        <div className="flex w-full justify-center">
          <ProgressBar
            total={5}
            progress={2}
            className="mx-auto mb-4 mt-1 w-[120px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomNode;
