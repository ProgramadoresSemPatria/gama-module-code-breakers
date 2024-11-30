type ProgressBarProps = {
    progress: number; 
    total: number;  
    className?: string;  
  };
  
  export function ProgressBar({ progress, total, className = "" }: ProgressBarProps) {
    const percentage = (progress / total) * 100;
  
    return (
      <div className={`flex flex-col items-center justify-centerpx-4 ${className} w-64`}>
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
  