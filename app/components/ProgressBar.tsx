type ProgressBarProps = {
    progress: number; 
    total: number;    
  };
  
  export function ProgressBar({ progress, total }: ProgressBarProps) {
    const percentage = (progress / total) * 100;
  
    return (
      <div className="mt-8 px-4">
        <p className="text-sm mt-2 font-bold">
          ({progress} / {total})
        </p>
        <div className="w-full bg-white rounded-full h-4 mt-2">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  }
  