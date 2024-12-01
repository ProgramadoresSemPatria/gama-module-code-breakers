import { Video, Star } from 'lucide-react';

interface TableData {
  id: string;
  title: string;
  difficulty: string;
  problemLink: string;
  solutionLink: string;
}

interface TopicsTableProps {
  data: TableData[];
}

const TopicsTable: React.FC<TopicsTableProps> = ({ data }) => {
  return (
    <div className="mt-8 overflow-x-auto text-white">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2 text-center">Status</th>
            <th className="p-2">Star</th>
            <th className="p-2">Problem</th>
            <th className="p-2">Difficulty</th>
            <th className="p-2">Solution</th>
          </tr>
        </thead>
        <tbody>
          {data.map((topic) => (
            <tr
              key={topic.id}
              className="border-t-2 border-gray-700 hover:bg-gray-800"
            >
              <td className="p-2 pl-4 pr-4 text-center">
                <input type="checkbox" className='className="absolute right-4 top-4 h-4 w-4 appearance-none rounded border-2 border-gray-600 bg-gray-800 checked:border-[#1d9772] checked:bg-[#1d9772] hover:border-[#1d9772'/>
              </td>
              <td className="p-2"><Star color='gold'/></td>
              <td className="p-2">
                <a href={topic.problemLink} className="hover:underline">
                  {topic.title}
                </a>
              </td>
              <td className="p-2">{topic.difficulty}</td>
              <td className="p-2 pr-4 pl-4 text-right">
                <a href={topic.solutionLink} className="hover:underline">
                  <Video />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopicsTable;

