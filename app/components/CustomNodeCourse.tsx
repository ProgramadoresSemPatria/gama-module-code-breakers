'use client';

import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';

export interface CustomNodeCourseData {
  id: string;
  label: string;
  slug: string;
  style?: {
    color?: string;
    fontWeight?: string;
    cursor?: string;
  };
}

const NODE_IMAGES: { [key: string]: string } = {
  'algorithms-&-data-structures-for-beginners':
    'https://utfs.io/f/sjtTg2QSL4hrtW5Tq41yM74Nqym62fhjFnaOYP0KTcwkptbI',
  'advanced-algorithms':
    'https://utfs.io/f/sjtTg2QSL4hr31YjXUilyKJrSMtmfNq01EbPOwdzW7Zh8oiF',
  'system-design-for-beginners':
    'https://utfs.io/f/sjtTg2QSL4hrhFQPTHkz5fJtD1dCKYs4ZEXqaIHh23B6opme',
  'objected-oriented-design-interviews':
    'https://utfs.io/f/sjtTg2QSL4hrtWQkXMNyM74Nqym62fhjFnaOYP0KTcwkptbI',
  'system-design-interview':
    'https://utfs.io/f/sjtTg2QSL4hr81tA2EmXP3nAktFid6NDe9LhGCUTm54a7wWZ',
  'sull-stack-development':
    'https://utfs.io/f/sjtTg2QSL4hrYvgd5B7qjZEfrIJOUncFg24Heia9TSd165BP',

  default: '',
};

export function CustomNodeCourse({ data }: { data: CustomNodeCourseData }) {
  const nodeImage = NODE_IMAGES[data.slug] || NODE_IMAGES['default'];

  return (
    <div
      className="custom-node flex w-[150px] flex-col items-center rounded-md bg-[#454d9e]"
      style={{
        color: data.style?.color,
        fontWeight: data.style?.fontWeight,
        cursor: data.style?.cursor,
      }}
    >
      <Handle type="target" position={Position.Top} className="opacity-0" />
      <Handle type="source" position={Position.Bottom} className="opacity-0" />

      <Image
        src={nodeImage}
        alt={data.label}
        width={80}
        height={80}
        className="h-20 w-full rounded-md"
      />

      <h3 className="mt-2 text-sm font-bold text-white">{data.label}</h3>
    </div>
  );
}
