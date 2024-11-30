type ProgressBarProps = {
    progress: number; 
    total: number;  
    className?: string;  
  };
  
  export function ProgressBar({ progress, total, className = "" }: ProgressBarProps) {
    const percentage = (progress / total) * 100;
  
    return (
      <div className={`px-4 ${className}`}>
        <p className="text-sm font-bold">
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
  