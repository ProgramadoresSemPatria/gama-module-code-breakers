type ProgressBarProps = {
  progress: number;
  total: number;
  showLabel?: boolean;
  className?: string;
};

export function ProgressBar({
  progress,
  total,
  className = '',
  showLabel = false,
}: ProgressBarProps) {
  const percentage = (progress / total) * 100;

  return (
    <div
      className={`justify-centerpx-4 flex flex-col items-center ${className} w-64`}
    >
      {showLabel && (
        <span className="w-full text-center">
          ({progress}/{total})
        </span>
      )}
      <div className="h-2 w-full rounded-full bg-white">
        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
