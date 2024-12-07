type PrerequisiteCardProps = {
  title: string;
  description: string;
  checked: boolean;
  onCheckChange: () => void;
};

export function PrerequisiteCard({
  title,
  description,
  checked,
  onCheckChange,
}: PrerequisiteCardProps) {
  return (
    <div className="relative h-[100px] w-[270px] cursor-pointer rounded-md bg-gray-950 p-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckChange}
        className="absolute right-4 top-4 h-4 w-4 appearance-none rounded border-2 border-gray-600 bg-gray-950 checked:border-[#1d9772] checked:bg-[#1d9772] hover:border-[#1d9772]"
      />

      <div>
        <h1 className="font-sans font-semibold text-white">{title}</h1>
        <h2 className="text-sm font-semibold text-blue-600">{description}</h2>
      </div>
    </div>
  );
}
