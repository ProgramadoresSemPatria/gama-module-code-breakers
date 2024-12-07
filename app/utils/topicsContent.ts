type Prerequisite = {
  id: string;
  title: string;
  description: string;
};

export type Problem = {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  problemLink: string;
  solutionLink: string;
};

export type TopicContent = {
  prerequisites: Prerequisite[];
  problems: Problem[];
};

type Topics = Record<string, TopicContent>;

export const topicsContent: Topics = {
  'arrays-&-hashing': {
    prerequisites: [
      {
        id: '1',
        title: 'Dynamic Arrays',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Hash Usage',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '3',
        title: 'Hash Implementation',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '4',
        title: 'Prefix Sums',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Contains Duplicate',
        difficulty: 'easy',
        problemLink: 'https://neetcode.io/problems/duplicate-integer',
        solutionLink: 'https://neetcode.io/solutions/contains-duplicate',
      },
      {
        id: 2,
        title: 'Valid Anagram',
        difficulty: 'easy',
        problemLink: 'https://neetcode.io/problems/is-anagram',
        solutionLink: 'https://neetcode.io/solutions/valid-anagram',
      },
      {
        id: 3,
        title: 'Two Sum',
        difficulty: 'easy',
        problemLink: 'https://neetcode.io/problems/two-integer-sum',
        solutionLink: 'https://neetcode.io/solutions/two-sum',
      },
      {
        id: 4,
        title: 'Group Anagrams',
        difficulty: 'medium',
        problemLink: 'https://neetcode.io/problems/anagram-groups',
        solutionLink: 'https://neetcode.io/solutions/group-anagrams',
      },
      {
        id: 5,
        title: 'Top K Frequent Elements',
        difficulty: 'medium',
        problemLink: 'https://neetcode.io/problems/top-k-elements-in-list',
        solutionLink: 'https://neetcode.io/solutions/top-k-frequent-elements',
      },
      {
        id: 6,
        title: 'Encode and Decode Strings',
        difficulty: 'medium',
        problemLink: 'https://neetcode.io/problems/string-encode-and-decode',
        solutionLink: 'https://neetcode.io/solutions/encode-and-decode-strings',
      },
      {
        id: 7,
        title: 'Product of Array Except Self',
        difficulty: 'medium',
        problemLink:
          'https://neetcode.io/problems/products-of-array-discluding-self',
        solutionLink:
          'https://neetcode.io/solutions/product-of-array-except-self',
      },
      {
        id: 8,
        title: 'Valid Sudoku',
        difficulty: 'medium',
        problemLink: 'https://neetcode.io/problems/valid-sudoku',
        solutionLink: 'https://neetcode.io/solutions/valid-sudoku',
      },
      {
        id: 9,
        title: 'Longest Conservative Subsequence',
        difficulty: 'medium',
        problemLink:
          'https://neetcode.io/problems/longest-consecutive-sequence',
        solutionLink:
          'https://neetcode.io/solutions/longest-consecutive-sequence',
      },
    ],
  },
  'two-pointers': {
    prerequisites: [],
    problems: [],
  },
  stack: {
    prerequisites: [],
    problems: [],
  },
  'binary-search': {
    prerequisites: [],
    problems: [],
  },
  'sliding-window': {
    prerequisites: [],
    problems: [],
  },
  'linked-list': {
    prerequisites: [],
    problems: [],
  },
  trees: {
    prerequisites: [],
    problems: [],
  },
  tries: {
    prerequisites: [],
    problems: [],
  },
  backtracking: {
    prerequisites: [],
    problems: [],
  },
  'heap-priority-queue': {
    prerequisites: [],
    problems: [],
  },
  graphs: {
    prerequisites: [],
    problems: [],
  },
  '1-d-dp': {
    prerequisites: [],
    problems: [],
  },
  intervals: {
    prerequisites: [],
    problems: [],
  },
  greedy: {
    prerequisites: [],
    problems: [],
  },
  'advanced-graphs': {
    prerequisites: [],
    problems: [],
  },
  '2d-dp': {
    prerequisites: [],
    problems: [],
  },
  'bit-manipulation': {
    prerequisites: [],
    problems: [],
  },
  'math-&-geometry': {
    prerequisites: [],
    problems: [],
  },
};
