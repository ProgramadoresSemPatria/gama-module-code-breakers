'use client';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    nodeData: { id: string; label: string } | null;
  }
  

  export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, nodeData }) => {
    if (!isOpen || !nodeData) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Node Details</h2>
        <p><strong>Node ID:</strong> {nodeData.id}</p>
        <p><strong>Label:</strong> {nodeData.label}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
