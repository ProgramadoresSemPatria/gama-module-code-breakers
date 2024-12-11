'use client';

import { Star, Video } from 'lucide-react';
import Link from 'next/link';

import { useGlobalStore } from '../globalStore';
import { Problem } from '../utils/topicsContent';

type ProblemsTable = {
  topicSlug: string;
  problems: Problem[];
};

export function ProblemsTable({ problems, topicSlug }: ProblemsTable) {
  const { setProblemCompleted, getTopicProgress, removeProblemId } =
    useGlobalStore();

  const { problemsCompleted } = getTopicProgress(topicSlug);

  function handleToggleCheck(topicSlug: string, problemId: number) {
    if (problemsCompleted.includes(problemId)) {
      removeProblemId(topicSlug, problemId);
      return;
    }

    setProblemCompleted(topicSlug, problemId);
  }

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
          {problems.map((problem) => (
            <tr
              key={problem.id}
              className="border-t-2 border-gray-700 hover:bg-gray-800"
            >
              <td className="flex justify-center p-2 pl-4 pr-4 text-center">
                <input
                  checked={problemsCompleted.includes(problem.id)}
                  onChange={() => handleToggleCheck(topicSlug, problem.id)}
                  type="checkbox"
                  className="right-4 top-4 grid h-4 w-4 cursor-pointer appearance-none place-content-center rounded border-2 border-gray-600 bg-gray-800 checked:border-[#1d9772] checked:bg-[#1d9772] checked:after:content-['✓'] hover:border-[#1d9772] focus:ring-1"
                />
              </td>
              <td className="p-2">
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      &:has(input[id='problem-${problem.id}']:checked)
                        #star-problem-${problem.id} {
                          fill: #ffd700
                        }
                    `,
                  }}
                />

                <label htmlFor={`problem-${problem.id}`}>
                  <Star
                    id={`star-problem-${problem.id}`}
                    color="gold"
                    className="cursor-pointer"
                  />
                </label>
                <input
                  id={`problem-${problem.id}`}
                  className="hidden"
                  type="checkbox"
                />
              </td>
              <td className="p-2">
                <Link
                  href={problem.problemLink}
                  className="hover:underline"
                  target="_blank"
                >
                  {problem.title}
                </Link>
              </td>
              <td
                className={`px-2 ${
                  problem.difficulty === 'easy'
                    ? 'text-green-500'
                    : problem.difficulty === 'medium'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                }`}
              >
                {problem.difficulty}
              </td>
              <td className="p-2 pl-4 pr-4 text-right">
                <Link
                  href={problem.solutionLink}
                  target="_blank"
                  className="hover:underline"
                >
                  <Video />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
