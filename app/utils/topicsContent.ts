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
    prerequisites: [
      {
        id: '1',
        title: 'Two Pointers',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Valid Palindrome',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/valid-palindrome/',
        solutionLink: 'https://neetcode.io/solutions/valid-palindrome',
      },
      {
        id: 2,
        title: 'Two Sum II Input Array Is Sorted ',
        difficulty: 'medium',
        problemLink: 'https://neetcode.io/problems/two-integer-sum-ii',
        solutionLink:
          'https://neetcode.io/solutions/two-sum-ii-input-array-is-sorted',
      },
      {
        id: 3,
        title: '3Sum',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/3sum/',
        solutionLink: 'https://neetcode.io/solutions/3sum',
      },
      {
        id: 4,
        title: 'Container With Most Water',
        difficulty: 'medium',
        problemLink: 'https://neetcode.io/problems/max-water-container',
        solutionLink: 'https://neetcode.io/solutions/container-with-most-water',
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
        title: 'Trapping Rain Water',
        difficulty: 'hard',
        problemLink: 'https://neetcode.io/problems/trapping-rain-water',
        solutionLink: 'https://neetcode.io/solutions/trapping-rain-water',
      },
    ],
  },
  stack: {
    prerequisites: [
      {
        id: '1',
        title: 'Stacks',
        description: 'Data Structures & Algorithms for Beginners',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Valid Parentheses',
        difficulty: 'easy',
        problemLink: 'https://neetcode.io/problems/validate-parentheses',
        solutionLink: 'https://neetcode.io/solutions/valid-parentheses',
      },
      {
        id: 2,
        title: 'Min Stack',
        difficulty: 'medium',
        problemLink: 'https://neetcode.io/problems/minimum-stack',
        solutionLink: 'https://neetcode.io/solutions/min-stack',
      },
      {
        id: 3,
        title: 'Evaluate Reverse Polish Notation',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
        solutionLink:
          'https://neetcode.io/solutions/evaluate-reverse-polish-notation',
      },
      {
        id: 4,
        title: 'Generate Parentheses',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/generate-parentheses/',
        solutionLink: 'https://neetcode.io/solutions/generate-parentheses',
      },
      {
        id: 5,
        title: 'Daily Temperatures',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/daily-temperatures/',
        solutionLink: 'https://neetcode.io/solutions/daily-temperatures',
      },
      {
        id: 6,
        title: 'Car Fleet',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/car-fleet/',
        solutionLink: 'https://neetcode.io/solutions/car-fleet',
      },
      {
        id: 7,
        title: 'Largest Rectangle In Histogram',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/largest-rectangle-in-histogram/',
        solutionLink:
          'https://neetcode.io/solutions/largest-rectangle-in-histogram',
      },
    ],
  },
  'binary-search': {
    prerequisites: [
      {
        id: '1',
        title: 'Search Array',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Search Range',
        description: 'Data Structures & Algorithms for Beginners',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Binary Search ',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/binary-search/',
        solutionLink: 'https://neetcode.io/solutions/binary-search',
      },
      {
        id: 2,
        title: 'Search a 2D Matrix',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/search-a-2d-matrix/',
        solutionLink: 'https://neetcode.io/solutions/search-a-2d-matrix',
      },
      {
        id: 3,
        title: 'Koko Eating Bananas ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/koko-eating-bananas/',
        solutionLink: 'https://neetcode.io/solutions/koko-eating-bananas',
      },
      {
        id: 4,
        title: 'Find Minimum In Rotated Sorted Array',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
        solutionLink:
          'https://neetcode.io/solutions/find-minimum-in-rotated-sorted-array',
      },
      {
        id: 5,
        title: 'Search In Rotated Sorted Array',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/search-in-rotated-sorted-array/',
        solutionLink:
          'https://neetcode.io/solutions/search-in-rotated-sorted-array',
      },
      {
        id: 6,
        title: 'Time Based Key Value Store',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/time-based-key-value-store/',
        solutionLink:
          'https://neetcode.io/solutions/time-based-key-value-store',
      },
      {
        id: 7,
        title: 'Median of Two Sorted Arrays ',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/median-of-two-sorted-arrays/',
        solutionLink:
          'https://neetcode.io/solutions/median-of-two-sorted-arrays',
      },
    ],
  },
  'sliding-window': {
    prerequisites: [
      {
        id: '1',
        title: 'Sliding Window Fixed Size',
        description: 'Advanced Algorithms',
      },
      {
        id: '2',
        title: 'Sliding Window Variable Size',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Best Time to Buy And Sell Stock',
        difficulty: 'easy',
        problemLink:
          'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
        solutionLink:
          'https://neetcode.io/solutions/best-time-to-buy-and-sell-stock',
      },
      {
        id: 2,
        title: 'Longest Substring Without Repeating Characters ',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
        solutionLink:
          'https://neetcode.io/solutions/longest-substring-without-repeating-characters',
      },
      {
        id: 3,
        title: 'Longest Repeating Character Replacement',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/longest-repeating-character-replacement/',
        solutionLink:
          'https://neetcode.io/solutions/longest-repeating-character-replacement',
      },
      {
        id: 4,
        title: 'Permutation In String',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/permutation-in-string/',
        solutionLink: 'https://neetcode.io/solutions/permutation-in-string',
      },
      {
        id: 5,
        title: 'Minimum Window Substring',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/minimum-window-substring/',
        solutionLink: 'https://neetcode.io/solutions/minimum-window-substring',
      },
      {
        id: 6,
        title: 'Sliding Window Maximum ',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/sliding-window-maximum/',
        solutionLink: 'https://neetcode.io/solutions/sliding-window-maximum',
      },
    ],
  },
  'linked-list': {
    prerequisites: [
      {
        id: '1',
        title: 'Singly Linked Lists',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Doubly Linked Lists',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '3',
        title: 'Fast and Slow Poniters',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Reverse Linked List',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/reverse-linked-list/',
        solutionLink: 'https://neetcode.io/solutions/reverse-linked-list',
      },
      {
        id: 2,
        title: 'Merge Two Sorted Lists',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/merge-two-sorted-lists/',
        solutionLink: 'https://neetcode.io/solutions/merge-two-sorted-lists',
      },
      {
        id: 3,
        title: 'Reorder List',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/reorder-list/',
        solutionLink: 'https://neetcode.io/solutions/reorder-list',
      },
      {
        id: 4,
        title: 'Remove Nth Node From End of List',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
        solutionLink:
          'https://neetcode.io/solutions/remove-nth-node-from-end-of-list',
      },
      {
        id: 5,
        title: 'Copy List With Random Pointer',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/copy-list-with-random-pointer/',
        solutionLink:
          'https://neetcode.io/solutions/copy-list-with-random-pointer',
      },
      {
        id: 6,
        title: 'Add Two Numbers ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/add-two-numbers/',
        solutionLink: 'https://neetcode.io/solutions/add-two-numbers',
      },
      {
        id: 7,
        title: 'Linked List Cycle',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/linked-list-cycle/',
        solutionLink: 'https://neetcode.io/solutions/linked-list-cycle',
      },
      {
        id: 8,
        title: 'Find The Duplicate Number',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/find-the-duplicate-number/',
        solutionLink: 'https://neetcode.io/solutions/find-the-duplicate-number',
      },
      {
        id: 9,
        title: 'LRU Cache',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/lru-cache/',
        solutionLink: 'https://neetcode.io/solutions/lru-cache',
      },
      {
        id: 10,
        title: 'Merge K Sorted Lists ',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/merge-k-sorted-lists/',
        solutionLink: 'https://neetcode.io/solutions/merge-k-sorted-lists',
      },
      {
        id: 11,
        title: 'Reverse Nodes In K Group',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
        solutionLink: 'https://neetcode.io/solutions/reverse-nodes-in-k-group',
      },
    ],
  },
  trees: {
    prerequisites: [
      {
        id: '1',
        title: 'BST Insert and Remove',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Depth-First Search',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '3',
        title: 'Breadth-First Search',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '4',
        title: 'BST Sets and Maps',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '5',
        title: 'Iterative DFS',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Invert Binary Tree',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/invert-binary-tree/',
        solutionLink: 'https://neetcode.io/solutions/invert-binary-tree',
      },
      {
        id: 2,
        title: 'Maximum Depth of Binary Tree',
        difficulty: 'easy',
        problemLink:
          'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
        solutionLink:
          'https://neetcode.io/solutions/maximum-depth-of-binary-tree',
      },
      {
        id: 3,
        title: 'Diameter of Binary Tree',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/diameter-of-binary-tree/',
        solutionLink: 'https://neetcode.io/solutions/diameter-of-binary-tree',
      },
      {
        id: 4,
        title: 'Balanced Binary Tree',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/balanced-binary-tree/',
        solutionLink: 'https://neetcode.io/solutions/balanced-binary-tree',
      },
      {
        id: 5,
        title: 'Same Tree',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/same-tree/',
        solutionLink: 'https://neetcode.io/solutions/same-tree',
      },
      {
        id: 6,
        title: 'Subtree of Another Tree',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/subtree-of-another-tree/',
        solutionLink: 'https://neetcode.io/solutions/subtree-of-another-tree',
      },
      {
        id: 7,
        title: 'Lowest Common Ancestor of a Binary Search Tree',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
        solutionLink:
          'https://neetcode.io/solutions/lowest-common-ancestor-of-a-binary-search-tree',
      },
      {
        id: 8,
        title: 'Binary Tree Level Order Traversal ',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/binary-tree-level-order-traversal/',
        solutionLink:
          'https://neetcode.io/solutions/binary-tree-level-order-traversal',
      },
      {
        id: 9,
        title: 'Binary Tree Right Side View',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/binary-tree-right-side-view/',
        solutionLink:
          'https://neetcode.io/solutions/binary-tree-right-side-view',
      },
      {
        id: 10,
        title: 'Count Good Nodes In Binary Tree',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/count-good-nodes-in-binary-tree/',
        solutionLink:
          'https://neetcode.io/solutions/count-good-nodes-in-binary-tree',
      },
      {
        id: 11,
        title: 'Validate Binary Search Tree',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/validate-binary-search-tree/',
        solutionLink:
          'https://neetcode.io/solutions/validate-binary-search-tree',
      },
      {
        id: 12,
        title: 'Kth Smallest Element In a Bst',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
        solutionLink:
          'https://neetcode.io/solutions/kth-smallest-element-in-a-bst',
      },
      {
        id: 13,
        title: 'Construct Binary Tree From Preorder And Inorder Traversal',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
        solutionLink:
          'https://neetcode.io/solutions/construct-binary-tree-from-preorder-and-inorder-traversal',
      },
      {
        id: 14,
        title: 'Binary Tree Maximum Path Sum',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
        solutionLink:
          'https://neetcode.io/solutions/binary-tree-maximum-path-sum',
      },
      {
        id: 15,
        title: 'Serialize And Deserialize Binary Tree',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',
        solutionLink:
          'https://neetcode.io/solutions/serialize-and-deserialize-binary-tree',
      },
    ],
  },
  tries: {
    prerequisites: [
      {
        id: '1',
        title: 'Trie',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Implement Trie Prefix Tree',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/implement-trie-prefix-tree/',
        solutionLink:
          'https://neetcode.io/solutions/implement-trie-prefix-tree',
      },
      {
        id: 2,
        title: 'Design Add And Search Words Data Structure ',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
        solutionLink:
          'https://neetcode.io/solutions/design-add-and-search-words-data-structure',
      },
      {
        id: 3,
        title: 'Word Search II',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/word-search-ii/',
        solutionLink: 'https://neetcode.io/solutions/word-search-ii',
      },
    ],
  },
  backtracking: {
    prerequisites: [
      {
        id: '1',
        title: 'Tree Maze',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Subsets',
        description: 'Advanced Algorithms',
      },
      {
        id: '3',
        title: 'Combinations',
        description: 'Advanced Algorithms',
      },
      {
        id: '4',
        title: 'Permutations',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Subsets',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/subsets/',
        solutionLink: 'https://neetcode.io/solutions/subsets',
      },
      {
        id: 2,
        title: 'Combination Sum ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/combination-sum/',
        solutionLink: 'https://neetcode.io/solutions/combination-sum',
      },
      {
        id: 3,
        title: 'Permutations',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/permutations/',
        solutionLink: 'https://neetcode.io/solutions/permutations',
      },
      {
        id: 4,
        title: 'Subsets II',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/subsets-ii/',
        solutionLink: 'https://neetcode.io/solutions/subsets-ii',
      },
      {
        id: 5,
        title: 'Combination Sum II',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/combination-sum-ii/',
        solutionLink: 'https://neetcode.io/solutions/combination-sum-ii',
      },
      {
        id: 6,
        title: 'Word Search',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/word-search/',
        solutionLink: 'https://neetcode.io/solutions/word-search',
      },
      {
        id: 7,
        title: 'Palindrome Partitioning',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/palindrome-partitioning/',
        solutionLink: 'https://neetcode.io/solutions/palindrome-partitioning',
      },
      {
        id: 8,
        title: 'Letter Combinations of a Phone Number',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
        solutionLink:
          'https://neetcode.io/solutions/letter-combinations-of-a-phone-number',
      },
      {
        id: 9,
        title: 'N Queens',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/n-queens/',
        solutionLink: 'https://neetcode.io/solutions/n-queens',
      },
    ],
  },
  'heap-priority-queue': {
    prerequisites: [
      {
        id: '1',
        title: 'Heap Properties',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Push and Pop',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '3',
        title: 'Heapify',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '4',
        title: 'Two Heaps',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Kth Largest Element In a Stream ',
        difficulty: 'easy',
        problemLink:
          'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
        solutionLink:
          'https://neetcode.io/solutions/kth-largest-element-in-a-stream',
      },
      {
        id: 2,
        title: 'Last Stone Weight',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/last-stone-weight/',
        solutionLink: 'https://neetcode.io/solutions/last-stone-weight',
      },
      {
        id: 3,
        title: 'K Closest Points to Origin ',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/k-closest-points-to-origin/',
        solutionLink:
          'https://neetcode.io/solutions/k-closest-points-to-origin',
      },
      {
        id: 4,
        title: 'Kth Largest Element In An Array',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/kth-largest-element-in-an-array/',
        solutionLink:
          'https://neetcode.io/solutions/kth-largest-element-in-an-array',
      },
      {
        id: 5,
        title: 'Task Scheduler',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/task-scheduler/',
        solutionLink: 'https://neetcode.io/solutions/task-scheduler',
      },
      {
        id: 6,
        title: 'Design Twitter',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/design-twitter/',
        solutionLink: 'https://neetcode.io/solutions/design-twitter',
      },
      {
        id: 7,
        title: 'Find Median From Data Stream ',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/find-median-from-data-stream/',
        solutionLink:
          'https://neetcode.io/solutions/find-median-from-data-stream',
      },
    ],
  },
  graphs: {
    prerequisites: [
      {
        id: '1',
        title: 'Intro to Graphs',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Matrix DFS',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '3',
        title: 'Matrix BFS',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '4',
        title: 'Adjacency List',
        description: 'Data Structures & Algorithms for Beginners',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Number of Islands',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/number-of-islands/',
        solutionLink: 'https://neetcode.io/solutions/number-of-islands',
      },
      {
        id: 2,
        title: 'Max Area of Island',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/max-area-of-island/',
        solutionLink: 'https://neetcode.io/solutions/max-area-of-island',
      },
      {
        id: 3,
        title: 'Clone Graph',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/clone-graph/',
        solutionLink: 'https://neetcode.io/solutions/clone-graph',
      },
      {
        id: 4,
        title: 'Walls And Gates',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/walls-and-gates/',
        solutionLink: 'https://neetcode.io/solutions/walls-and-gates',
      },
      {
        id: 5,
        title: 'Rotting Oranges',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/rotting-oranges/',
        solutionLink: 'https://neetcode.io/solutions/rotting-oranges',
      },
      {
        id: 6,
        title: 'Pacific Atlantic Water Flow',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/pacific-atlantic-water-flow/',
        solutionLink:
          'https://neetcode.io/solutions/pacific-atlantic-water-flow',
      },
      {
        id: 7,
        title: 'Surrounded Regions',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/surrounded-regions/',
        solutionLink: 'https://neetcode.io/solutions/surrounded-regions',
      },
      {
        id: 8,
        title: 'Course Schedule',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/course-schedule/',
        solutionLink: 'https://neetcode.io/solutions/course-schedule',
      },
      {
        id: 9,
        title: 'Course Schedule II',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/course-schedule-ii/',
        solutionLink: 'https://neetcode.io/solutions/course-schedule-ii',
      },
      {
        id: 10,
        title: 'Graph Valid Tree',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/graph-valid-tree/',
        solutionLink: 'https://neetcode.io/solutions/graph-valid-tree',
      },
      {
        id: 11,
        title: 'Number of Connected Components In An Undirected Graph',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/',
        solutionLink:
          'https://neetcode.io/solutions/number-of-connected-components-in-an-undirected-graph',
      },
      {
        id: 12,
        title: 'Redundant Connection',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/redundant-connection/',
        solutionLink: 'https://neetcode.io/solutions/redundant-connection',
      },
      {
        id: 13,
        title: 'Word Ladder',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/word-ladder/',
        solutionLink: 'https://neetcode.io/solutions/word-ladder',
      },
    ],
  },
  '1-d-dp': {
    prerequisites: [
      {
        id: '1',
        title: '1-Dimension DP',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: 'Palindromes',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Climbing Stairs',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/climbing-stairs/',
        solutionLink: 'https://neetcode.io/solutions/climbing-stairs',
      },
      {
        id: 2,
        title: 'Min Cost Climbing Stairs',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/min-cost-climbing-stairs/',
        solutionLink: 'https://neetcode.io/solutions/min-cost-climbing-stairs',
      },
      {
        id: 3,
        title: 'House Robber',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/house-robber/',
        solutionLink: 'https://neetcode.io/solutions/house-robber',
      },
      {
        id: 4,
        title: 'Walls And Gates',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/walls-and-gates/',
        solutionLink: 'https://neetcode.io/solutions/walls-and-gates',
      },
      {
        id: 5,
        title: 'House Robber II',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/house-robber-ii/',
        solutionLink: 'https://neetcode.io/solutions/house-robber-ii',
      },
      {
        id: 6,
        title: 'Longest Palindromic Substring',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/longest-palindromic-substring/',
        solutionLink:
          'https://neetcode.io/solutions/longest-palindromic-substring',
      },
      {
        id: 7,
        title: 'Palindromic Substrings ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/palindromic-substrings/',
        solutionLink: 'https://neetcode.io/solutions/palindromic-substrings',
      },
      {
        id: 8,
        title: 'Decode Ways',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/decode-ways/',
        solutionLink: 'https://neetcode.io/solutions/decode-ways',
      },
      {
        id: 9,
        title: 'Coin Change',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/coin-change/',
        solutionLink: 'https://neetcode.io/solutions/coin-change',
      },
      {
        id: 10,
        title: 'Maximum Product Subarray',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/maximum-product-subarray/',
        solutionLink: 'https://neetcode.io/solutions/maximum-product-subarray',
      },
      {
        id: 11,
        title: 'Word Break',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/word-break/',
        solutionLink: 'https://neetcode.io/solutions/word-break',
      },
      {
        id: 12,
        title: 'Longest Increasing Subsequence',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/longest-increasing-subsequence/',
        solutionLink:
          'https://neetcode.io/solutions/longest-increasing-subsequence',
      },
      {
        id: 13,
        title: 'Partition Equal Subset Sum ',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/partition-equal-subset-sum/',
        solutionLink:
          'https://neetcode.io/solutions/partition-equal-subset-sum',
      },
    ],
  },
  intervals: {
    prerequisites: [],
    problems: [
      {
        id: 1,
        title: 'Insert Interval',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/insert-interval/',
        solutionLink: 'https://neetcode.io/solutions/insert-interval',
      },
      {
        id: 2,
        title: 'Merge Intervals',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/merge-intervals/',
        solutionLink: 'https://neetcode.io/solutions/merge-intervals',
      },
      {
        id: 3,
        title: 'Non Overlapping Intervals',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/non-overlapping-intervals/',
        solutionLink: 'https://neetcode.io/solutions/non-overlapping-intervals',
      },
      {
        id: 4,
        title: 'Meeting Rooms',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/meeting-rooms/',
        solutionLink: 'https://neetcode.io/solutions/meeting-rooms',
      },
      {
        id: 5,
        title: 'Meeting Rooms II',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/meeting-rooms-ii/',
        solutionLink: 'https://neetcode.io/solutions/meeting-rooms-ii',
      },
      {
        id: 6,
        title: 'Minimum Interval to Include Each Query ',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/minimum-interval-to-include-each-query/',
        solutionLink:
          'https://neetcode.io/solutions/minimum-interval-to-include-each-query',
      },
    ],
  },
  greedy: {
    prerequisites: [
      {
        id: '1',
        title: 'Kadanes Algorithm',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Maximum Subarrayl',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/maximum-subarray/',
        solutionLink: 'https://neetcode.io/solutions/maximum-subarray',
      },
      {
        id: 2,
        title: 'Jump Game',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/jump-game/',
        solutionLink: 'https://neetcode.io/solutions/jump-game',
      },
      {
        id: 3,
        title: 'Jump Game II ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/jump-game-ii/',
        solutionLink: 'https://neetcode.io/solutions/jump-game-ii',
      },
      {
        id: 4,
        title: 'Gas Station',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/gas-station/',
        solutionLink: 'https://neetcode.io/solutions/gas-station',
      },
      {
        id: 5,
        title: 'Hand of Straights',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/hand-of-straights/',
        solutionLink: 'https://neetcode.io/solutions/hand-of-straights',
      },
      {
        id: 6,
        title: 'Merge Triplets to Form Target Triplet',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/merge-triplets-to-form-target-triplet/',
        solutionLink:
          'https://neetcode.io/solutions/merge-triplets-to-form-target-triplet',
      },
      {
        id: 7,
        title: 'Partition Labels',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/partition-labels/',
        solutionLink: 'https://neetcode.io/solutions/partition-labels',
      },
      {
        id: 8,
        title: 'Valid Parenthesis String',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/valid-parenthesis-string/',
        solutionLink: 'https://neetcode.io/solutions/valid-parenthesis-string',
      },
    ],
  },
  'advanced-graphs': {
    prerequisites: [
      {
        id: '1',
        title: 'Dijkstras',
        description: 'Advanced Algorithms',
      },
      {
        id: '2',
        title: 'Prims',
        description: 'Advanced Algorithms',
      },
      {
        id: '3',
        title: 'Kruskals',
        description: 'Advanced Algorithms',
      },
      {
        id: '4',
        title: 'Topological Sort',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Reconstruct Itinerary',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/reconstruct-itinerary/',
        solutionLink: 'https://neetcode.io/solutions/reconstruct-itinerary',
      },
      {
        id: 2,
        title: 'JMin Cost to Connect All Points',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/min-cost-to-connect-all-points/',
        solutionLink:
          'https://neetcode.io/solutions/min-cost-to-connect-all-points',
      },
      {
        id: 3,
        title: 'Network Delay Time',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/network-delay-time/',
        solutionLink: 'https://neetcode.io/solutions/network-delay-time',
      },
      {
        id: 4,
        title: 'Swim In Rising Water',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/swim-in-rising-water/',
        solutionLink: 'https://neetcode.io/solutions/swim-in-rising-water',
      },
      {
        id: 5,
        title: 'Alien Dictionary',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/alien-dictionary/',
        solutionLink: 'https://neetcode.io/solutions/alien-dictionary',
      },
      {
        id: 6,
        title: 'Cheapest Flights Within K Stops',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/cheapest-flights-within-k-stops/',
        solutionLink:
          'https://neetcode.io/solutions/cheapest-flights-within-k-stops',
      },
    ],
  },
  '2d-dp': {
    prerequisites: [
      {
        id: '1',
        title: '2-Dimension DP',
        description: 'Data Structures & Algorithms for Beginners',
      },
      {
        id: '2',
        title: '0 / 1 Knapsack',
        description: 'Advanced Algorithms',
      },
      {
        id: '3',
        title: 'Unbounded Knapsack',
        description: 'Advanced Algorithms',
      },
      {
        id: '4',
        title: 'LCS',
        description: 'Advanced Algorithms',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Unique Paths',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/unique-paths/',
        solutionLink: 'https://neetcode.io/solutions/unique-paths',
      },
      {
        id: 2,
        title: 'Longest Common Subsequence',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/longest-common-subsequence/',
        solutionLink:
          'https://neetcode.io/solutions/longest-common-subsequence',
      },
      {
        id: 3,
        title: 'Best Time to Buy And Sell Stock With Cooldown ',
        difficulty: 'medium',
        problemLink:
          'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
        solutionLink:
          'https://neetcode.io/solutions/best-time-to-buy-and-sell-stock-with-cooldown',
      },
      {
        id: 4,
        title: 'Coin Change II',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/coin-change-ii/',
        solutionLink: 'https://neetcode.io/solutions/coin-change-ii',
      },
      {
        id: 5,
        title: 'Target Sum',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/target-sum/',
        solutionLink: 'https://neetcode.io/solutions/target-sum',
      },
      {
        id: 6,
        title: 'Interleaving String ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/interleaving-string/',
        solutionLink: 'https://neetcode.io/solutions/interleaving-string',
      },
      {
        id: 7,
        title: 'Longest Increasing Path In a Matrix',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
        solutionLink:
          'https://neetcode.io/solutions/longest-increasing-path-in-a-matrix',
      },
      {
        id: 8,
        title: 'Distinct Subsequences',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/distinct-subsequences/',
        solutionLink: 'https://neetcode.io/solutions/distinct-subsequences',
      },
      {
        id: 9,
        title: 'Edit Distance ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/edit-distance/',
        solutionLink: 'https://neetcode.io/solutions/edit-distance',
      },
      {
        id: 10,
        title: 'Burst Balloons',
        difficulty: 'hard',
        problemLink: 'https://leetcode.com/problems/burst-balloons/',
        solutionLink: 'https://neetcode.io/solutions/burst-balloons',
      },
      {
        id: 11,
        title: 'Regular Expression Matching',
        difficulty: 'hard',
        problemLink:
          'https://leetcode.com/problems/regular-expression-matching/',
        solutionLink:
          'https://neetcode.io/solutions/regular-expression-matching',
      },
    ],
  },
  'bit-manipulation': {
    prerequisites: [
      {
        id: '1',
        title: 'Bit Operations',
        description: 'Data Structures & Algorithms for Beginners',
      },
    ],
    problems: [
      {
        id: 1,
        title: 'Single Number ',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/single-number/',
        solutionLink: 'https://neetcode.io/solutions/single-number',
      },
      {
        id: 2,
        title: 'Number of 1 Bits',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/number-of-1-bits/',
        solutionLink: 'https://neetcode.io/solutions/number-of-1-bits',
      },
      {
        id: 3,
        title: 'Counting Bits',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/counting-bits/',
        solutionLink: 'https://neetcode.io/solutions/counting-bits',
      },
      {
        id: 4,
        title: 'Reverse Bits',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/reverse-bits/',
        solutionLink: 'https://neetcode.io/solutions/reverse-bits',
      },
      {
        id: 5,
        title: 'Missing Number',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/missing-number/',
        solutionLink: 'https://neetcode.io/solutions/missing-number',
      },
      {
        id: 6,
        title: 'Sum of Two Integers',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/sum-of-two-integers/',
        solutionLink: 'https://neetcode.io/solutions/sum-of-two-integers',
      },
      {
        id: 7,
        title: 'Reverse Integer ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/reverse-integer/',
        solutionLink: 'https://neetcode.io/solutions/reverse-integer',
      },
    ],
  },
  'math-&-geometry': {
    prerequisites: [],
    problems: [
      {
        id: 1,
        title: 'Rotate Image',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/rotate-image/',
        solutionLink: 'https://neetcode.io/solutions/rotate-image',
      },
      {
        id: 2,
        title: 'Spiral Matrix ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/spiral-matrix/',
        solutionLink: 'https://neetcode.io/solutions/spiral-matrix',
      },
      {
        id: 3,
        title: 'Set Matrix Zeroes ',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/set-matrix-zeroes/',
        solutionLink: 'https://neetcode.io/solutions/set-matrix-zeroes',
      },
      {
        id: 4,
        title: 'Happy Number ',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/happy-number/',
        solutionLink: 'https://neetcode.io/solutions/happy-number',
      },
      {
        id: 5,
        title: 'Plus One',
        difficulty: 'easy',
        problemLink: 'https://leetcode.com/problems/plus-one/',
        solutionLink: 'https://neetcode.io/solutions/plus-one',
      },
      {
        id: 6,
        title: 'Pow(x, n)',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/powx-n/',
        solutionLink: 'https://neetcode.io/solutions/powx-n',
      },
      {
        id: 7,
        title: 'Multiply Strings',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/multiply-strings/',
        solutionLink: 'https://neetcode.io/solutions/multiply-strings',
      },
      {
        id: 8,
        title: 'Detect Squares',
        difficulty: 'medium',
        problemLink: 'https://leetcode.com/problems/detect-squares/',
        solutionLink: 'https://neetcode.io/solutions/detect-squares',
      },
    ],
  },
};
